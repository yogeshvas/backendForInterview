import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
