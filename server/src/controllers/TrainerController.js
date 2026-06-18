import TrainerService from '../services/TrainerService.js';
import response from '../utils/response.js';

export class TrainerController {
  async list(req, res, next) {
    try {
      const trainers = await TrainerService.list();
      return response.success(res, trainers);
    } catch (error) {
      next(error);
    }
  }
}
