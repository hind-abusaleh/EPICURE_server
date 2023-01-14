import { Router } from "express";
import { AuthController } from "../controllers/authController";

const router = Router();
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.post("/getuser", AuthController.getuser);
router.post("/updateUsersBag", AuthController.updateUsersBag);
router.post("/getLastHistoryOrder",AuthController.getLastHistoryOrder );


export default router;