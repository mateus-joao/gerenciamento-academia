import jwt from 'jsonwebtoken';
import env from '../config/env.js';
export default function generateToken(id) {
  return jwt.sign(id, env.jwtSecret, { expiresIn: '1d' });
}
