import { Router } from "express";
import { createHospitals } from "../Controllers/hospitalController.js";

const router = Router();

router.post("/create-hospitals", createHospitals);

export default router;
