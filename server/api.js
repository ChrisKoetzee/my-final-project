import { Router } from "express";
import logger from "./utils/logger";
import TeacherForm from "../client/src/pages/TeacherForm";

const router = Router();
router.use("/teachers", TeacherForm)

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

export default router;
