import validateAuth from '../validators/authValidator.js';
import {createUserValidation, updateUserValidation, loginUserValidation} from '../validators/userValidator.js';
import validateStudent from '../validators/studentValidator.js';
import validateTrainer from '../validators/trainerValidator.js';
import validatePlan from '../validators/planValidator.js';
import validateWorkout from '../validators/workoutValidator.js';
import validatePayment from '../validators/paymentValidator.js';


export {
  validateAuth,
  createUserValidation,
  validateStudent,
  validateTrainer,
  validatePlan,
  validateWorkout,
  validatePayment,
  updateUserValidation,
  loginUserValidation
};
