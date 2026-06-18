import { Router } from 'express';
import { UserController } from '../controllers/index.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validateUser } from '../middlewares/validationMiddleware.js';

const UserControllerInstance = new UserController();
const usersRoutes = Router();

usersRoutes.get('/', authMiddleware, validateUser, (req, res) =>
	UserControllerInstance.list(req, res)
);
usersRoutes.post('/', validateUser, (req, res) =>
	UserControllerInstance.create(req, res)
);

export { usersRoutes };
