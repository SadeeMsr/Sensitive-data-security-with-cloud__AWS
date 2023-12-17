import { Router } from "express";
import userRouter from "./userRoutes.js";
import hospitalRouter from "./hospitalRoutes.js"
import authenticationRouter from "./authenticationRoute.js";
import logbookRouter from "./logbookRoutes.js";

const router = Router();

router.use("/log-in", authenticationRouter);
router.use("/users", userRouter);
router.use("/hospitals", hospitalRouter);
router.use("/logbook", logbookRouter);

export default router;
 