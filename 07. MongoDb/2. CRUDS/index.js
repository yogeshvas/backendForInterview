import express from "express";
import mongoose from "mongoose";
import { User } from "./models/user.js";
const app = express();

mongoose
  .connect("mongodb+srv://yogesh:yogesh@cluster0.7sqwppe.mongodb.net/")
  .then(() => {
    console.log("Connection is made with Mongo DB ATALS");
  })
  .catch((err) => {
    console.log("error connecting to mongo dB", err);
  });

app.get("/", (req, res) => {
  res.send("Home Route");
});

//creating a document
app.get("/create", async (req, res) => {
  const newUser = await User.create({
    name: "Yogesh",
    email: "yogeshs@gmail.com",
    phone: "9876543211",
  });

  console.log("user created");
  res.send(newUser);
});

//reading a document
app.get("/read", async (req, res) => {
  const foundUser = await User.findOne({ email: "yogesh@gmail.com" });
  const allUsers = await User.find();
  console.log("user read");
  res.send(allUsers);
});

//updating a document
app.get("/update", async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    {
      email: "yogesh@gmail.com",
    },
    { email: "yogeshytvashisth@gmail.com" },
    {
      new: true,
    }
    //yeh new isliye lagatya taki naya updated user mil sake, varna is nhi lagate to uodate to ho jata lekin response mein purana naam hi aata :)
  );
  console.log("user updated");
  res.send(updatedUser);
});

//deleting a document
app.get("/delete", async (req, res) => {
  const deletedUser = await User.findOneAndDelete({
    email: "yogeshs@gmail.com",
  });
  res.send(deletedUser);
});

app.listen(3000, () => {
  console.log("app is connected to port 3000");
});
