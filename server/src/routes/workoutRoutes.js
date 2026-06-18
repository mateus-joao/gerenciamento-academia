import { Router } from 'express';
import { WorkoutController } from '../controllers/index.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validateWorkout } from '../middlewares/validationMiddleware.js';

const WorkoutControllerInstance = new WorkoutController();
const workoutsRoutes = Router();

workoutsRoutes.get('/', authMiddleware, validateWorkout, (req, res) =>
	WorkoutControllerInstance.list(req, res)
);

export { workoutsRoutes };
