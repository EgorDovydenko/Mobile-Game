import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

interface CustomErrorModel {
  [key: string]: string;
}

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let fieldErrors: CustomErrorModel = {
      unknown: "",
    };
    errors.array().forEach((error) => {
      if (error.type === "field") {
        fieldErrors[error.path] = error.msg;
      } else {
        fieldErrors["unknown"] = error.msg;
      }
    });
    return res.status(400).json(fieldErrors);
  }
  next();
};
