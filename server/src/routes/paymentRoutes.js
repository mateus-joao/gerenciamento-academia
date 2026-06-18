import { Router } from 'express';
import { PaymentController } from '../controllers/index.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validatePayment } from '../middlewares/validationMiddleware.js';

const PaymentControllerInstance = new PaymentController();
const paymentsRoutes = Router();

paymentsRoutes.get('/', authMiddleware, validatePayment, (req, res) =>
	PaymentControllerInstance.list(req, res)
);

export { paymentsRoutes };
