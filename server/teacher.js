import { Router } from "express";
import query from "./db.js";

const router = Router();

router.post("/", async (req, res) => {
	try {
		const { fullNames, surname, email, phoneNumber, password } = req.body;
		const insertQuery =
			"INSERT INTO teachers (fullNames, surname, email, phoneNumber, password) VALUES ($1, $2, $3, $4, $5) RETURNING *";
		const values = [fullNames, surname, email, phoneNumber, password];
		const result = await query.query(insertQuery, values);
		res.status(200).json(result.rows[0]);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while creating the teacher" });
	}
});

router.get("/", async (req, res) => {
	try {
		const selectQuery =
			"SELECT id, fullNames, surname, email, phoneNumber FROM teachers";
		const result = await query.query(selectQuery);
		res.status(200).json(result.rows);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while fetching the teachers" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const selectQuery =
			"SELECT id, fullNames, surname, email, phoneNumber FROM teachers WHERE id = $1";
		const result = await query.query(selectQuery, [id]);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "Teacher not found" });
		} else {
			res.status(200).json(result.rows[0]);
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while fetching the teacher" });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const { fullNames, surname, email, phoneNumber, password } = req.body;
		const updateQuery =
			"UPDATE teachers SET fullNames = $1, surname = $2, email = $3, phoneNumber = $4, passwordTeacher = $5 WHERE id = $6 RETURNING *";
		const values = [fullNames, surname, email, phoneNumber, password, id];
		const result = await query.query(updateQuery, values);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "Teacher not found" });
		} else {
			res.status(200).json(result.rows[0]);
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while updating the teacher" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const deleteQuery = "DELETE FROM teachers WHERE id = $1 RETURNING *";
		const result = await query.query(deleteQuery, [id]);
		if (result.rows.length === 0) {
			res.status(404).json({ error: "Teacher not found" });
		} else {
			res.status(200).json({ message: "Teacher deleted successfully" });
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while deleting the teacher" });
	}
});

export default router;
