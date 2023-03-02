import { Router } from "express";
import { HistoryOrdersController } from "../controllers/historyOrdersController";
const router = Router();
router.post("/createHistoryOrder", HistoryOrdersController.createHistoryOrder);
router.post("/getHistoryOrdersByID",HistoryOrdersController.getHistoryOrdersByID);
export default router;