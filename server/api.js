import { Router } from "express";
// import jwt from "jsonwebtoken";

import logger from "./utils/logger";
// const JWT_SECRET = "Super Secret code....";
// Demo Database

const router = Router();

router.get("/", (_, res) => {
	const Users = [
		{
			id: 1,
			name: "Diego Harera",
			email: "mydiego@gmail.com",
			password: "Zxcvbnm2023",
		},
		{
			id: 2,
			name: "John Due",
			email: "johndue@gmail.com",
			password: "Qwerty2023",
		},
	];
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});



export default router;
