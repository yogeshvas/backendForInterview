import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://yogesh:yogesh@cluster0.7sqwppe.mongodb.net/users"
);
const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
