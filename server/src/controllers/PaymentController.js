import PaymentService from '../services/PaymentService.js';
import response from '../utils/response.js';

export class PaymentController {
  async list(req, res, next) {
    try {
      const payments = await PaymentService.list();
      return response.success(res, payments);
    } catch (error) {
      next(error);
    }
  }
}
