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
app.get("/test", async (req, res) => {
  User.aggregate([{ $match: { age: 20 } }]);
});

// group iska matlab, jaise age wise users group kar dena

app.get("/group", async (req, res) => {
  let users = await User.aggregate([
    {
      $group: {
        _id: "$age",
        userdata: {
          $push: "$$ROOT",
          // yeh $$ROOT sara data laake dega :)
        },
      },
    },
  ]);
});

// kisi bhi collection mein agar koi data ek id hai to app usko actual data se fill kar sakte ho bilkul populate ki tarah
app.get("/group", async (req, res) => {
  let users = await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localFeild: "author",
        foriegnFeild: "_id",
        as: "authordata",
      },
    },
  ]);
});

app.listen(3000, () => {
  console.log("server is live");
});
