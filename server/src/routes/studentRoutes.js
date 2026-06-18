import { Router } from 'express';
import { StudentController } from '../controllers/index.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validateStudent } from '../middlewares/validationMiddleware.js';

const StudentControllerInstance = new StudentController();
const studentsRoutes = Router();

studentsRoutes.get('/', authMiddleware, validateStudent, (req, res) =>
	StudentControllerInstance.list(req, res)
);

export { studentsRoutes };
