import { Router } from 'express';
import { TrainerController } from '../controllers/index.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validateTrainer } from '../middlewares/validationMiddleware.js';

const TrainerControllerInstance = new TrainerController();
const trainersRoutes = Router();

trainersRoutes.get('/', authMiddleware, validateTrainer, (req, res) =>
	TrainerControllerInstance.list(req, res)
);

export { trainersRoutes };
