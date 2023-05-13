import { Router } from "express";
import query from "./db.js";

const router = Router();

router.post("/table", (req, res) => {
	query
		.query(
			"CREATE TABLE IF NOT EXISTS students (id serial PRIMARY KEY, fullNames VARCHAR(50) NOT NULL, surname VARCHAR(50) NOT NULL, dateOfBirth DATE NOT NULL, email VARCHAR(150) NOT NULL, phoneNumber INTEGER  NOT NULL, gender VARCHAR(6), password VARCHAR (10))"
		)
		.then((result) => res.status(200).json(result.command))
		.catch((error) => console.error(error));
});
router.post("/new", (req, res) => {
	const {
		fullNames,
		surname,
		dateOfBirth,
		email,
		phoneNumber,
		gender,
		password,
	} = req.body;
	const Query =
		"INSERT INTO students (fullNames, surname, dateOfBirth, email, phoneNumber, gender, password ) VALUES($1, $2, $3, $4, $5, $6, $7)";
	query
		.query(Query, [
			fullNames,
			surname,
			dateOfBirth,
			email,
			phoneNumber,
			gender,
			password,
		])
		.then(() =>
			res.status(200).json({ message: "Student loaded successfully" })
		)
		.catch((error) =>
			res
				.status(400)
				.json({ error: "Information loaded incorrectly - " + error.message })
		);
});
router.get("/", (req, res) => {
	query
		.query(
			"SELECT id, fullNames, surname, dateOfBirth, email, gender, phoneNumber FROM students"
		)
		.then((result) => res.json(result.rows))
		.catch((error) => res.status(400).json(error));
});
router.get("/:id", (req, res) => {
	const id = req.params.id;
	query
		.query(
			"SELECT fullNames, surname, dateOfBirth, email, gender, phoneNumber FROM students WHERE id=$1",
			[id]
		)
		.then((result) => res.json(result.rows))
		.catch((error) => res.status(400).json(error));
});
router.delete("/:id", (req, res) => {
	const id = req.params.id;
	query.query("DELETE FROM students WHERE id=$1", [id]).then(() => {
		query.query("COMMIT", (err) => {
			if (err) {
				console.error("Error commiting delete", err.stack);
				res.send(400).json(err);
			} else {
				res.status(200).json({ error: "Successfully removed" });
			}
		});
	});
});
router.put("/:id", (req, res) => {
	const id = req.params.id;
	const { fullNames, surname, dateOfBirth, email, phoneNumber, gender } =
		req.body;
	query
		.query(
			"UPDATE students SET fullNames=$2, surname=$3, dateOfBirth=$4, email=$5, phoneNumber=$6 gender=$7 WHERE id=$1",
			[id, fullNames, surname, dateOfBirth, email, phoneNumber, gender]
		)
		.then(() => {
			query.query("COMMIT", (err) => {
				if (err) {
					console.error("Error in update of details", err.stack);
					res.send(400).json(err);
				} else {
					res.send(200).json({ message: "Student details Updated" });
				}
			});
		})
		.catch((error) => {
			query.query("ROLLBACK", (err) => {
				if (err) {
					console.error("Rolling back the transaction", err.stack);
				}
				res.status(500).json(error);
			});
		});
});

export default router;
