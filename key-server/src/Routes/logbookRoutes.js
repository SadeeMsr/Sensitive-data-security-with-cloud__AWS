import { Router } from "express";
import { createLog, updateDiagnosis } from "../Controllers/logbookController.js";

const router = Router();

router.post("/create-patient", createLog);
router.post("/update-diagnosis", updateDiagnosis);
// router.get("/submissions/:traineeID", findSubmissions);
// router.get("/trainee-submissions/:supervisorID", findSubmissionsBySupervisor);
// router.put("/logbook-approval/:formID", updateApprovalStatus);

export default router;

