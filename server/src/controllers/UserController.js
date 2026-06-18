import UserService from '../services/UserService.js';
import response from '../utils/response.js';

export class UserController {
  async list(req, res, next) {
    try {
      const users = await UserService.list();
      console.log(users)
      return response.success(res, users);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const user = (req.body);
      return response.success(res, user, 201);
    } catch (error) {
      next(error);
    }  
  }
}
