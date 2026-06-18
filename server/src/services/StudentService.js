import StudentRepository from '../repositories/StudentRepository.js';

export default {
  async list() {
    return StudentRepository.findAll();
  },
};
