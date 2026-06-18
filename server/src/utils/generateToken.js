import jwt from 'jsonwebtoken';
import env from '../config/env.js';

export default function generateToken(payload) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: '1h' });
}
