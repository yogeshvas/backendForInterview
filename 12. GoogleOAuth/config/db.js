import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database ");
  } catch (error) {
    console.log("error connecting to the database");
  }
};
