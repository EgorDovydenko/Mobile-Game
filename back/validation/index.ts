import { body } from "express-validator";

export const registerValidation = [
  body("email", "Некорректный email").isEmail(),
  body("name", "Имя должно содержать 3-20 символов")
    .isLength({ min: 3, max: 20 })
    .isString(),
  body("password", "Пароль должен содержать 6-20 символов").isLength({
    min: 6,
    max: 20,
  }),
];

export const loginValidation = [
  body("email", "Некорректный email").isEmail(),
  body("password", "Пароль должен содержать 6-20 символов").isLength({
    min: 6,
    max: 20,
  }),
];
