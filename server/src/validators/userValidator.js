import { body } from "express-validator";

export const createUserValidation = [
  body("name")
    .notEmpty()
    .isLength({ min: 3, max: 100 })
    .withMessage("Invalid name"),

  body("email")
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Invalid password")
];

export const updateUserValidation = [
 body("name")
    .optional()
    .isLength({ min: 3, max: 100 })
    .withMessage("Invalid name"),

  body("phone")
    .optional()
    .isMobilePhone("pt-BR")
    .withMessage("Invalid phone"),

  body("password")
    .optional()
    .isLength({ min: 8 })
    .withMessage("Invalid password")
];

export const loginUserValidation = [
  body("email")
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Invalid password")
];