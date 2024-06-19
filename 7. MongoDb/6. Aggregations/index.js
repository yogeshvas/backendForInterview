import express from "express";
import { User } from "./models/user";

const app = express();

app.get("/", (res, res) => {
  res.send("Hello World");
});
// app.get("/test", async (res, res) => {
//   User.aggregate([query1, query2, query3]);
// });

// app.get("/test", async (res, res) => {
//   User.aggregate([
//     {same bhopal ke log dhundho}
//     ,
//     {use me se sare males nikalo}
//     ,
//     {usme me se 25 umar se bade bale user nikalo}
// ]);
// });
app.get("/test", async (res, res) => {
  User.aggregate([{ $match: { age: 20 } }]);
});

app.listen(3000, () => {
  console.log("server is live");
});
