import express from 'express';
import chefsRoutes from './chefs.routes';
import cuisinesRoutes from './cuisines.routes';
import restaurantsRoutes from './restaurants.routes';
import dishesRoutes from './dishes.routes';

const router = express.Router();
router.use('/api/chefs/', chefsRoutes);
router.use('/api/cuisines/', cuisinesRoutes);
router.use('/api/restaurants/', restaurantsRoutes);
router.use('/api/dishes/', dishesRoutes);
export default router;