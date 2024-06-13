import express from "express";
import { User } from "./models/user.js";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect("mongodb+srv://yogesh:yogesh@cluster0.7sqwppe.mongodb.net/")
  .then(() => {
    console.log("Connection is made with Mongo DB ATALS");
  })
  .catch((err) => {
    console.log("error connecting to mongo dB", err);
  });

const dummyUsers = [
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phoneNo: 1234567890,
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNo: 1234567891,
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phoneNo: 1234567892,
  },
  {
    name: "Daisy Miller",
    email: "daisy.miller@example.com",
    phoneNo: 1234567893,
  },
  {
    name: "Ethan Davis",
    email: "ethan.davis@example.com",
    phoneNo: 1234567894,
  },
  {
    name: "Fiona White",
    email: "fiona.white@example.com",
    phoneNo: 1234567895,
  },
  {
    name: "George Harris",
    email: "george.harris@example.com",
    phoneNo: 1234567896,
  },
  {
    name: "Hannah Clark",
    email: "hannah.clark@example.com",
    phoneNo: 1234567897,
  },
  { name: "Ian Lewis", email: "ian.lewis@example.com", phoneNo: 1234567898 },
  {
    name: "Jane Walker",
    email: "jane.walker@example.com",
    phoneNo: 1234567899,
  },
  { name: "Kyle Hall", email: "kyle.hall@example.com", phoneNo: 1234567800 },
  {
    name: "Laura Allen",
    email: "laura.allen@example.com",
    phoneNo: 1234567801,
  },
  {
    name: "Michael Young",
    email: "michael.young@example.com",
    phoneNo: 1234567802,
  },
  { name: "Nina King", email: "nina.king@example.com", phoneNo: 1234567803 },
  {
    name: "Oscar Wright",
    email: "oscar.wright@example.com",
    phoneNo: 1234567804,
  },
  {
    name: "Paula Green",
    email: "paula.green@example.com",
    phoneNo: 1234567805,
  },
];

app.get("/", (req, res) => {
  res.send("Home Route");
});

//insertMany
app.get("/multi", async (req, res) => {
  try {
    const response = await User.insertMany(dummyUsers);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//eqOperator

app.get("/eq", async (req, res) => {
  const response = await User.find({ age: { eq: 20 } });
  res.status(200).json(response);
});

app.listen(3000);
