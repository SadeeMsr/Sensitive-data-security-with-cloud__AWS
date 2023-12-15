import { Router } from "express";
import { creatUser} from "../Controllers/userController.js";


const router = Router()

router.post("/create-users", creatUser)


export default router;