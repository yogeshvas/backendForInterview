import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("connect to db");
  } catch (error) {
    console.error("error connecting to mongo", err);
    process.exit(1);
  }
};

export default connectDB;
