import WorkoutService from '../services/WorkoutService.js';
import response from '../utils/response.js';

export class WorkoutController {
  async list(req, res, next) {
    try {
      const workouts = await WorkoutService.list();
      return response.success(res, workouts);
    } catch (error) {
      next(error);
    }
  }
}
