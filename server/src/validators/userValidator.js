import { body } from "express-validator";
import { cpf } from "cpf-cnpj-validator";

export const createUserValidation = [
  body("name")
    .notEmpty()
    .isLength({ min: 3, max: 100 })
    .withMessage("Invalid name"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email"),
    
  body("cpf")
    .custom((value) => {
      if (!cpf.isValid(value)) {
        throw new Error("Invalid CPF");
      }
      return true;
    }),
  body("password")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
  
    })
    .withMessage("Invalid password"),
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
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })
    .withMessage("Invalid password"),
];

export const loginUserValidation = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
  
    })
    .withMessage("Invalid password"),
];