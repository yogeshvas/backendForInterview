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
    age: 10,
  },

  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNo: 1234567891,
    age: 50,
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phoneNo: 1234567892,
    age: 10,
  },
  {
    name: "Daisy Miller",
    email: "daisy.miller@example.com",
    phoneNo: 1234567893,
    age: 80,
  },
  {
    name: "Ethan Davis",
    email: "ethan.davis@example.com",
    phoneNo: 1234567894,
    age: 90,
  },
  {
    name: "Fiona White",
    email: "fiona.white@example.com",
    phoneNo: 1234567895,
    age: 16,
  },
  {
    name: "George Harris",
    email: "george.harris@example.com",
    phoneNo: 1234567896,
    age: 13,
  },
  {
    name: "Hannah Clark",
    email: "hannah.clark@example.com",
    phoneNo: 1234567897,
    age: 12,
  },
  {
    name: "Ian Lewis",
    email: "ian.lewis@example.com",
    phoneNo: 1234567898,
    age: 32,
  },
  {
    name: "Jane Walker",
    email: "jane.walker@example.com",
    phoneNo: 1234567899,
    age: 56,
  },
  {
    name: "Kyle Hall",
    email: "kyle.hall@example.com",
    phoneNo: 1234567800,
    age: 10,
  },
  {
    name: "Laura Allen",
    email: "laura.allen@example.com",
    phoneNo: 1234567801,
    age: 34,
  },
  {
    name: "Michael Young",
    email: "michael.young@example.com",
    phoneNo: 1234567802,
    age: 66,
  },
  {
    name: "Nina King",
    email: "nina.king@example.com",
    phoneNo: 1234567803,
    age: 10,
  },
  {
    name: "Oscar Wright",
    email: "oscar.wright@example.com",
    phoneNo: 1234567804,
    age: 50,
  },
  {
    name: "Paula Green",
    email: "paula.green@example.com",
    phoneNo: 1234567805,
    age: 90,
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

//eqOperator : equals to
app.get("/eq", async (req, res) => {
  const response = await User.find({ age: { $eq: 12 } });
  res.status(200).json(response);
});

//neqOpearator : not equals to
app.get("/ne", async (req, res) => {
  const response = await User.find({ age: { $ne: 12 } });
  res.json(response);
});

//ltOpearator : less than
app.get("/lt", async (req, res) => {
  const response = await User.find({ age: { $lt: 50 } });
  res.json(response);
});

//lteOpearator : less than and  equals to
app.get("/lte", async (req, res) => {
  const response = await User.find({ age: { $lte: 50 } });
  res.json(response);
});

//gtOpearator : greater than
app.get("/gt", async (req, res) => {
  const response = await User.find({ age: { $gt: 50 } });
  res.json(response);
});

//gteOpearator : greater than and  equals to
app.get("/gte", async (req, res) => {
  const response = await User.find({ age: { $gte: 50 } });
  res.json(response);
});

//inOpearator : in
app.get("/in", async (req, res) => {
  const response = await User.find({ age: { $in: [50, 12, 10] } });
  res.json(response);
});

app.listen(3000);
