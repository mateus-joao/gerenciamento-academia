import { Router } from 'express';
import { AuthController } from '../controllers/index.js';
import { validateAuth } from '../middlewares/validationMiddleware.js';

const AuthControllerInstance = new AuthController();
const authRoutes = Router();

authRoutes.post('/login', validateAuth, (req, res) =>
	AuthControllerInstance.login(req, res)
);
authRoutes.post('/register', validateAuth, (req, res) =>
	AuthControllerInstance.register(req, res)
);

export { authRoutes };
