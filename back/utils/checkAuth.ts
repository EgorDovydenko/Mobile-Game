import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// hardcoded secret key and typescript any type

export const checkAuth = (req: any, res: Response, next: NextFunction) => {
  const token = (req.headers.authorization || "").replace(/^Bearer\s/, "");

  if (!token) {
    return res.status(403).json({ message: "Нет доступа" });
  }

  try {
    const decoded: any = jwt.verify(token, "112233");
    req.id = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Нет доступа" });
  }
};
