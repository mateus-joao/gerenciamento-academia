import AppError from '../utils/AppError.js';
export const roleMiddleware = (...roles) => {
    return (req, res) => {

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Acesso negado."
            });
        }
        
    };
};