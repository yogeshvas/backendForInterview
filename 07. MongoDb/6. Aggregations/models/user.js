import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://yogesh:yogesh@cluster0.7sqwppe.mongodb.net/testingAggregations"
);

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
