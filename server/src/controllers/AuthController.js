import AuthService from '../services/AuthService.js';
import response from '../utils/response.js';

export class AuthController {
  async login(req, res, next) {
    try {
      const result = await AuthService.login(req.body);
      return response.success(res, result);
    } catch (error) {
      next(error);
    }
  }

  async register(req, res, next) {
    try {
      const result = await AuthService.register(req.body);
      return response.success(res, result, 201);
    } catch (error) {
      next(error);
    }
  }
}
