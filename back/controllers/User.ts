import { UserModel } from "./../../front/types/user/index";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";
import { WeaponsEnum } from "../models/constants";
import { UserType } from "../models/types";

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

export const setUserWeapon = async (
  req: Request<{}, UserType, { weapon: WeaponsEnum }>,
  res: Response
) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { weapon } = req.body;
    const user = jwt.verify(token, "112233") as UserType;

    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      { weapon, step: 2 },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const { _id, ...userData } = updatedUser.toJSON();
    res.json({ id: _id, ...userData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
