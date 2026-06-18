import UserRepository from '../repositories/UserRepository.js';

export default {
  async list() {
    return UserRepository.findAll();
  },
};
