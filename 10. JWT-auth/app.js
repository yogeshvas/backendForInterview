import express from "express";

const app = express();
require("dotenv").config();
app.use("/", () => {
  console.log("going");
});
app.listen(3000);
