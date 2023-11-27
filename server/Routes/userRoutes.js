import { Router } from "express";
import { creatUser, updateUser, fetchUsers, showUser} from "../Controllers/userController.js";


const router = Router()
router.get("/",fetchUsers)
router.get("/:id", showUser);
router.post("/", creatUser)
router.put("/:id", updateUser)

export default router;