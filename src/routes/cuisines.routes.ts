import { Router } from "express";
import { cuisinesController } from "../controllers/cuisinesController";
const router = Router();
router.get("/getCuisines", cuisinesController.getCuisines);
router.post("/createCuisines", cuisinesController.createCuisines);
export default router;