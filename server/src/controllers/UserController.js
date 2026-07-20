import UserService from '../services/UserService.js';
import response from '../utils/response.js';
import bcrypt from "bcryptjs";
import generateToken from '../utils/generateToken.js';
import User from '../models/User.js';
import { body } from 'express-validator';

export class UserController {
  async listUsers(req, res, next) {
    try {
      const users = await UserService.findall();
      return response.success(res, users);
    } catch (error) {
      return response.error(res, {mensage: 'Error locating all users'})
    }
  }

  async createUser(req, res) {
    try {
      const credencials = (req.body);

      const exist = await UserService.findUser({email: credencials.email})
      if (exist){
        return response.error(res, {mensage: "This email already exists."})
      } 
      const cpfExist = await UserService.findUser({cpf: credencials.cpf})
      if (cpfExist){ 
        return response.error(res, {mensage: "This cpf already exists."})
      
      }

      const user = await UserService.createUser(credencials) 
      if (!user){
        return response.error(res, {mensage: 'Error creating user'})
        
      }
      const token = generateToken({id: user.id})
      return response.success(res, {mensage: 'User created sucessfully', token})
    } catch (error) {
      return response.error(res, {mensage: 'Error creating user'})
    }  
  }

  async login(req, res) {
    try{
      const credentials = req.body;
      const user = await UserService.findUser({email: credentials.email})
      if (!user) {
        return response.error(res, {mensage: "User not found"})
      }
      const passwordMatch = await bcrypt.compare(credentials.password, user.password);
      const token = generateToken({id: user.id})
      if (passwordMatch) return response.success(res, token)
      else return response.error(res, {mensage: 'Incorrect data'})
    }
    catch (error) {
      return response.error(res, {mensage: 'Login error'})
    }
  }

  async deleteUser(req, res) {
    try{    
      const data = await UserService.deleteUser(req.userId)
      if (data) return response.success(res, {mensage: "deleted"})
    }
    catch (error) {
      return response.error(res, {mensage: "Error deleting user"})
    }
  }

  async updaterUser(req, res) {
    try{
      const credentials = req.body;
      const data = await UserService.updateUser(req.userId, credentials)
      return response.success(res, {mensage: "update sucessfully"})
    }
    catch (error){
      response.error(res, {mensage: "Error updating user"})
    }
  }

  async getUser(req, res) {
    try{
      const id = req.userId

      const user = await UserService.getUser(id)
      if (!user) return response.error(res, {mensage: "User not found"})
      const { name, email, typeUser, phone } = user;
      return response.success(res, {name, email, typeUser, phone})
    }
    catch (error){
      return response.error(res, {mensage: "Error retrieving user"})
    }
  }
}
