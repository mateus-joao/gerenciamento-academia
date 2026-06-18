import PlanService from '../services/PlanService.js';
import response from '../utils/response.js';

export class PlanController {
  async list(req, res, next) {
    try {
      const plans = await PlanService.list();
      return response.success(res, plans);
    } catch (error) {
      next(error);
    }
  }
}
