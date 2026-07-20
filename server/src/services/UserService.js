import UserRepository from '../repositories/UserRepository.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import crypto from "crypto";


export default {
  async findall() {
    return User.find();
  },
  async createUser(user) {
    const passwordHash = await bcrypt.hash(user.password, 10);
    return await User.create({
        ...user,
        password: passwordHash
    });
  },
  async findUser(credencial) {
    return await User.findOne(credencial);
  },
  async deleteUser(id) {
    return await User.findByIdAndDelete(id)
  },
  async updateUser(id, updateUser) {
    if (updateUser.password) {
      updateUser.password = await bcrypt.hash(updateUser.password, 10);
    }
    return User.findByIdAndUpdate(
      id,
      updateUser,
      {  returnDocument: "after" }
    );
  },

  async getUser(id) {
    return User.findById(id)
  }

};
