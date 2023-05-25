import { Router } from "express";
import query from "./db.js";

const router = Router();

router.post("/table", (req, res) => {
  query
    .query(
      "CREATE TABLE IF NOT EXISTS students (id serial PRIMARY KEY, fullnames VARCHAR(50) NOT NULL, surname VARCHAR(50) NOT NULL, dateofbirth DATE NOT NULL, email VARCHAR(150) NOT NULL, phonenumber INTEGER NOT NULL, password VARCHAR(10))"
    )
    .then((result) => res.status(200).json(result.command))
    .catch((error) => res.status(400).send(error));
});

router.post("/new", (req, res) => {
  const {
    fullnames,
    surname,
    dateofbirth,
    email,
    phonenumber,
    password,
  } = req.body;
  const queryText =
    "INSERT INTO students (fullnames, surname, dateofbirth, email, phonenumber, password) VALUES ($1, $2, $3, $4, $5, $6)";
  query
    .query(queryText, [
      fullnames,
      surname,
      dateofbirth,
      email,
      phonenumber,
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
      "SELECT id, fullnames, surname, dateofbirth, email, phonenumber FROM students"
    )
    .then((result) => res.json(result.rows))
    .catch((error) => res.status(400).json(error));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  query
    .query(
      "SELECT fullnames, surname, dateofbirth, email, phonenumber FROM students WHERE id = $1",
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
  const { fullnames, surname, dateofbirth, email, phonenumber } = req.body;
  query
    .query(
      "UPDATE students SET fullname = $1, surname = $2, dateofbirth = $3, email = $4, phonenumber = $5 WHERE id = $6",
      [fullnames, surname, dateofbirth, email, phonenumber, id]
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
