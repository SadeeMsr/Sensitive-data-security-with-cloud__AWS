import { Router } from "express";
import { createUser, findSupervisors} from "../Controllers/userController.js";


const router = Router()

router.post("/create-users", createUser)
router.get("/supervisors", findSupervisors)


export default router;