import express from "express";
import { User } from "./models/user.js";
import { Post } from "./models/posts.js";
// embedding tab jab data jtada size mein future mein bada nhi hoga aur refrencing tab jab user ka data jyada size mein bada ho jaiga
const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  const { username, email, password } = req.body;
  //   const newser = await User.findOne({ username });
  let createdUser = await User.create({
    username,
    email,
    password,
  });
  res.send(createdUser);
});
app.post("/:username/create/post", async (req, res) => {
  const foundUser = await User.findOne({ username: req.params.username });
  const createdPost = await Post.create({
    content: "this is a post",
    user: foundUser._id,
  });

  foundUser.posts.push(createdPost._id);
  await foundUser.save();
  res.send({ foundUser, createdPost });
});

app.get("/posts", async (req, res) => {
  let posts = await Post.find().populate("user");
  res.send(posts);
});

app.get("/users", async (req, res) => {
  let users = await User.find().populate("posts");
  res.send(users);
});
app.listen(3000, (req, res) => {
  console.log("server is live");
});
