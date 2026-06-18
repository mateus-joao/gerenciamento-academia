import { Router } from 'express';
import { authRoutes } from './authRoutes.js';
import { usersRoutes } from './userRoutes.js';
import { studentsRoutes } from './studentRoutes.js';
import { trainersRoutes } from './trainerRoutes.js';
import { plansRoutes } from './planRoutes.js';
import { workoutsRoutes } from './workoutRoutes.js';
import { paymentsRoutes } from './paymentRoutes.js';

const router = Router();
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/students', studentsRoutes);
router.use('/trainers', trainersRoutes);
router.use('/plans', plansRoutes);
router.use('/workouts', workoutsRoutes);
router.use('/payments', paymentsRoutes);

export default router;
