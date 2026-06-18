import generateToken from '../utils/generateToken.js';

export default {
  async login(data) {
    return { token: generateToken({ email: data.email }) };
  },

  async register(data) {
    return { id: 'new-user', ...data };
  },
};
