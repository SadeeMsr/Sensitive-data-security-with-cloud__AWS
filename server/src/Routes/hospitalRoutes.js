import { Router } from "express";
import { createHospitals, findMasterDataForAdmin } from "../Controllers/hospitalController.js";

const router = Router();

router.post("/create-hospitals", createHospitals);
router.get("/admin-data", findMasterDataForAdmin);

export default router;
