import StudentService from '../services/StudentService.js';
import response from '../utils/response.js';

export class StudentController {
  async list(req, res, next) {
    try {
      const students = await StudentService.list();
      return response.success(res, students);
    } catch (error) {
      next(error);
    }
  }
}
