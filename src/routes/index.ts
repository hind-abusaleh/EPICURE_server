import express from 'express';
import chefsRoutes from './chefs.routes';
import cuisinesRoutes from './cuisines.routes';
import restaurantsRoutes from './restaurants.routes';
import dishesRoutes from './dishes.routes';
import authRoutes from "./auth.routes";
import ordersRoutes from "./orders.routes";
import historyOrdersRoutes from "./historyOrders.routes";

const router = express.Router();
router.use('/api/chefs/', chefsRoutes);
router.use('/api/cuisines/', cuisinesRoutes);
router.use('/api/restaurants/', restaurantsRoutes);
router.use('/api/dishes/', dishesRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/orders/', ordersRoutes);
router.use('/api/historyOrders/', historyOrdersRoutes);

export default router;