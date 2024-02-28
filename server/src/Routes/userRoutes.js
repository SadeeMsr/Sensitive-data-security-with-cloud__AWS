import { Router } from "express";
import { createUser, findUserSymmetricKey} from "../Controllers/userController.js";


const router = Router()

router.post("/create-users", createUser)
router.get("/find-key/:userID", findUserSymmetricKey)


export default router;