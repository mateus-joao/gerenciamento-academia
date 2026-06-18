import { Router } from 'express';
import { PlanController } from '../controllers/index.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validatePlan } from '../middlewares/validationMiddleware.js';

const PlanControllerInstance = new PlanController();
const plansRoutes = Router();

plansRoutes.get('/', authMiddleware, validatePlan, (req, res) =>
	PlanControllerInstance.list(req, res)
);

export { plansRoutes };
