import { Router } from "express";
import { LoginController,RegisterControllerSession,LogOutControllerSession } from "../Controllers/Session.controller.js";

const router = Router()

router.post("/login",LoginController)
router.post("/register",RegisterControllerSession)
router.delete("/outSession",LogOutControllerSession)

export default router;