import WorkoutRepository from '../repositories/WorkoutRepository.js';

export default {
  async list() {
    return WorkoutRepository.findAll();
  },
};
