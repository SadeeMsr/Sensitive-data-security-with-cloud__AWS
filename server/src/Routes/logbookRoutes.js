import { Router } from "express";
import { createLog, findSubmissions, findSubmissionsBySupervisor, updateApprovalStatus } from "../Controllers/logbookController.js";

const router = Router();

router.post("/daily-log", createLog);
router.get("/submissions/:traineeID", findSubmissions);
router.get("/trainee-submissions/:supervisorID", findSubmissionsBySupervisor);
router.put("/logbook-approval/:formID", updateApprovalStatus);

export default router;
