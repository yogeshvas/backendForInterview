const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb+srv://yogesh:yogesh@cluster0.7sqwppe.mongodb.net")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Home");
});
app.listen(3000);
