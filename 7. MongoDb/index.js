const express = require("express");

const app = express();
const mongooseconnection = require("./config/mongoose");
app.get("/", (req, res) => {
  res.send("Home");
});
app.listen(3000);
