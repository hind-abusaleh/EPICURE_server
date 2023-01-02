import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";
const router = Router();
router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/createRestaurant", RestaurantsController.createRestaurant);
router.get("/getPopularRestaurants", RestaurantsController.getPopularRestaurants);
export default router;