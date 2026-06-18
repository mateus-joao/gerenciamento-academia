import AppError from '../utils/AppError.js';

export function authMiddleware(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return next(new AppError('Unauthorized', 401));
  }

  req.user = { id: 'anonymous' };
  next();
}
