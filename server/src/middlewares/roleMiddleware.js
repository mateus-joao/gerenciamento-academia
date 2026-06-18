import AppError from '../utils/AppError.js';

export function roleMiddleware(role) {
  return (req, res, next) => {
    const userRole = req.user && req.user.role;
    if (!userRole || userRole !== role) {
      return next(new AppError('Forbidden', 403));
    }
    next();
  };
}
