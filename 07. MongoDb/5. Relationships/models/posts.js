import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: String,
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", userSchema);
