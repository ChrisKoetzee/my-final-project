

import { Router } from "express";
import query from "./db.js";

const router = Router();

router.post("/table", (req, res) => {
  query
    .query(
      "CREATE TABLE IF NOT EXISTS students (id serial PRIMARY KEY, firstname VARCHAR(50) NOT NULL, lastname VARCHAR(50) NOT NULL, dateofbirth DATE NOT NULL, email VARCHAR(150) NOT NULL, phonenumber INTEGER NOT NULL, gender VARCHAR(6), password VARCHAR(10))"
    )
    .then((result) => res.status(200).json(result.command))
    .catch((error) => res.status(400).send(error));
});

router.post("/new", (req, res) => {
  const {
    firstname,
    lastname,
    dateofbirth,
    email,
    phonenumber,
    gender,
    password,
  } = req.body;
  const queryText =
    "INSERT INTO students (firstname, lastname, dateofbirth, email, phonenumber, gender, password) VALUES ($1, $2, $3, $4, $5, $6, $7)";
  query
    .query(queryText, [
      firstname,
      lastname,
      dateofbirth,
      email,
      phonenumber,
      gender,
      password,
    ])
    .then(() =>
      res.status(200).json({ message: "Student loaded successfully" })
    )
    .catch((error) =>
      res.status(400).json({
        error: "Information loaded incorrectly - " + error.message,
      })
    );
});

router.get("/", (req, res) => {
  query
    .query(
      "SELECT id, firstname, surname, dateofbirth, email, gender, phonenumber FROM students"
    )
    .then((result) => res.json(result.rows))
    .catch((error) => res.status(400).json(error));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  query
    .query(
      "SELECT firstname, surname, dateofbirth, email, gender, phonenumber FROM students WHERE id = $1",
      [id]
    )
    .then((result) => res.json(result.rows))
    .catch((error) => res.status(400).json(error));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  query
    .query("DELETE FROM students WHERE id = $1", [id])
    .then(() => {
      query.query("COMMIT", () => {
        res.status(200).json({ message: "Successfully removed" });
      });
    })
    .catch((error) => res.status(400).json(error));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { firstname, surname, dateofbirth, email, phonenumber, gender } =
    req.body;
  query
    .query(
      "UPDATE students SET firstname = $1, surname = $2, dateofbirth = $3, email = $4, phonenumber = $5, gender = $6 WHERE id = $7",
      [firstname, surname, dateofbirth, email, phonenumber, gender, id]
    )
    .then(() => {
      query.query("COMMIT", (err) => {
        if (err) {
          res.status(400).json(err.stack + "Error in updating student details");
        } else {
          res.status(200).json({ message: "Student details updated" });
        }
      });
    })
    .catch((error) => {
      query.query("ROLLBACK", (err) => {
        if (err) {
          res.status(400).json("Rolling back the transaction" + err.stack);
        }
        res.status(500).json(error);
      });
    });
});

export default router;
