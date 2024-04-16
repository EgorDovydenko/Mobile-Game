import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name, step } = req.body;

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const doc = new User({
      email,
      passwordHash: password_hash,
      name,
      step,
    });
    // hotfix typescript
    const user: any = await doc.save();

    const token = jwt.sign({ id: user._id }, "112233", {
      expiresIn: "1d",
    });

    const { passwordHash, _id, ...userData } = user._doc;

    res.json({ ...userData, id: _id, token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  console.log("JEJEJ", req);
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      const isValidPassword = await bcrypt.compare(password, user.passwordHash);

      if (!isValidPassword) {
        res.status(400).json({ message: "Invalid password" });
      } else {
        const token = jwt.sign(
          {
            id: user.id,
          },
          "112233",
          {
            expiresIn: "30d",
          }
        );
        // @ts-ignore
        const { passwordHash, _id, ...userData } = user._doc;

        res.json({ id: _id, token, ...userData });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserInfo = async (req: any, res: Response) => {
  try {
    const user: any = await User.findById(req.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { passwordHash, _id, ...userData } = user._doc;

    res.json({ id: _id, ...userData });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
