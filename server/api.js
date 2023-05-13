import { Router } from "express";
// import jwt from "jsonwebtoken";

import logger from "./utils/logger";
// const JWT_SECRET = "Super Secret code....";
// Demo Database

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

export default router;
