import { Router } from "express";
import { authenticateUser } from "../Controllers/userController.js";

const router = Router();

router.get("/", authenticateUser);

export default router;
