import { Router } from "express";
import { OrdersController } from "../controllers/ordersController";
const router = Router();
router.post("/createOrder", OrdersController.createOrder);
router.post("/getOrdersByID",OrdersController.getOrdersByID);
export default router;