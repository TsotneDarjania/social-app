import { body } from "express-validator";

export const userRegistrationValidation = [
  body("userName")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("email").isEmail().withMessage("Email is not valid"),
];

export const userLoginValidation = [
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
