import { Router } from "express";
import { query } from "./db.js";
import logger from "./utils/logger";

const router = Router();

router.post('/table', (req, res) => {
	query
		.query('CREATE TABLE IF NOT EXISTS students (id serial PRIMARY KEY, firstName VARCHAR(50) NOT NULL, lastName VARCHAR(50) NOT NULL, email VARCHAR(150) NOT NULL, phoneNumber INTEGER  NOT NULL)')
		.then((result) => res.status(200).json(result.command))
		.catch((error) => console.error(error));
});
router.post('/new', (req, res) =>{
	const {firstName, lastName, dateOfBirth, email, phoneNumber, password} = req.body;
	const query = 'INSERT INTO students (firstName, lastName, dateOfBirth, email, phoneNumber, password ) VALUES($1, $2, $3, $4, $5, $6)'
	query
		.query(query, [firstName, lastName, dateOfBirth, email, phoneNumber, password])
		.then(() => res.status(200).json({message: 'Student loaded successfully'}))
		.catch((error) => res.status(500).json({error: 'Information loaded incorrectly' + error.message}));
});
router.get('/', (req, res) => {
	query
        .query('SELECT firstName, lastName, dateOfBirth, email, phoneNumber FROM students')
	  	.then((result) => res.json(result.rows))
		.catch((error) => res.status(500).json(error));
});
router.get('/:id', (req, res) => {
	const id = req.params.id;
	query
        .query('SELECT firstName, lastName, dateOfBirth, email, phoneNumber FROM students WHERE id=$1', [id])
	  	.then((result) => res.json(result.rows))
		.catch((error) => res.status(500).json(error));
});
router.delete('/:id', (req, res) => {
	const id = req.params.id;
	query
		.query('DELETE FROM students WHERE id=$1', [id])
		.then(() => {
			pool.query('COMMIT', (err) => {
				if (err){
					console.error('Error commiting delete', err.stack);
					res.send(500).json(err);
				} else {
					res.status(200).json({error: 'Successfully removed'})
				}
			})
		})
})
router.put('/:id', (req, res) => {
	const id = req.params.id;
	const {firstName, lastName, dateOfBirth, email, phoneNumber} = req.body;
	query 
		.query('UPDATE students SET firstName=? lastName=? dateOfBirth=?, email=?, phoneNumber = ? WHERE id=$1', [id, firstName, lastName, dateOfBirth, email, phoneNumber])
		.then(() => {
			pool.query('COMMIT', (err) => {
				if (err){
					console.error('Error in update of details', err.stack);
					res.send(500).json(err);
				} else {
					res.send(200).json({message: 'Student details Updated'});
				}
			})
		})
		.catch((error) => {
			pool.query('ROLLBACK', (err) => {
				if (err) {
					console.error('Rolling back the transaction', err.stack);
				} 
				res.status(500).json(error)
			})
		})
})


export default router;