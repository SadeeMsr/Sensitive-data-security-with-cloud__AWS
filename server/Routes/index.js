import { Router } from "express";
import userRouter from './userRoutes.js'
//import traineeApplicationRouter from './Trainee_ApplicationRoutes.js'
const router =Router()

router.use("/api/user",userRouter)

export default router