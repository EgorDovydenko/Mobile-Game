import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const doc = new User({
      email,
      passwordHash: password_hash,
      name,
    });
    // hotfix typescript
    const user: any = await doc.save();

    const token = jwt.sign({ _id: user._id }, "112233", {
      expiresIn: "1d",
    });

    const { passwordHash, ...userData } = user._doc;

    res.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
