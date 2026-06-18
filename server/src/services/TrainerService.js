import TrainerRepository from '../repositories/TrainerRepository.js';

export default {
  async list() {
    return TrainerRepository.findAll();
  },
};
