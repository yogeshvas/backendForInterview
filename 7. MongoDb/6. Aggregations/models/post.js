import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: Number,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
