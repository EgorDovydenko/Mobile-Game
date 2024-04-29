import mongoose from "mongoose";
import { WeaponsEnum } from "./constants";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    step: {
      type: Number,
      required: true,
      default: 1,
    },
    weapon: {
      type: String,
      enum: Object.values(WeaponsEnum),
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
