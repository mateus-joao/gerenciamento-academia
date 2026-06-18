import PaymentRepository from '../repositories/PaymentRepository.js';

export default {
  async list() {
    return PaymentRepository.findAll();
  },
};
