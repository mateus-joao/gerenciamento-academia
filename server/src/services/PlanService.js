import PlanRepository from '../repositories/PlanRepository.js';

export default {
  async list() {
    return PlanRepository.findAll();
  },
};
