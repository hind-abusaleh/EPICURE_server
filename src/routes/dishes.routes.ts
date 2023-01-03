import { Router } from "express";
import { DishesController } from "../controllers/dishesController";
const router = Router();
router.get("/getDishes", DishesController.getDishes);
router.post("/createDish", DishesController.createDish);
router.post("/getDishesByID",DishesController.getDishesByID);
router.get("/getPopularDishes", DishesController.getPopularDishes);
router.post("/getDishesByType_ResName",DishesController.getDishesByType_ResName);
export default router;