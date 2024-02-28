import { Router } from "express";
import { createLog, findDiagnosisDetails, updateDiagnosisDetails } from "../Controllers/logbookController.js";

const router = Router();

router.post("/create-patient", createLog);
router.get("/find-diagnosis/:form_id", findDiagnosisDetails);
router.put("/update-diagnosis", updateDiagnosisDetails);


export default router;
