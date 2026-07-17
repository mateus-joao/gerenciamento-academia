import { Router } from 'express';
import { UserController } from '../controllers/index.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import {createUserValidation, validateAuth, updateUserValidation, loginUserValidation } from '../middlewares/validationMiddleware.js';

const UserControllerInstance = new UserController();
const usersRoutes = Router();
//http://localhost:3001/api/users

// buscar todos os usuarios cadastrados
usersRoutes.get('/', (req, res) =>
	UserControllerInstance.listUsers(req, res)
);

// criar usuario
usersRoutes.post('/createUser', createUserValidation, validateAuth,  (req, res) =>
	UserControllerInstance.createUser(req, res)
);

// login
usersRoutes.post('/login', loginUserValidation, validateAuth, (req, res) =>
	UserControllerInstance.login(req, res)
);

// deletar usuario
usersRoutes.delete('/delete', authMiddleware, (req, res) =>
	UserControllerInstance.deleteUser(req, res)
);

// atualizar dados do usuario
usersRoutes.put('/updateUser', authMiddleware, updateUserValidation, validateAuth, (req, res) =>
	UserControllerInstance.updaterUser(req, res)
);

usersRoutes.get('/me', authMiddleware, (req, res) => 
	UserControllerInstance.getUser(req, res)
);
export { usersRoutes };
