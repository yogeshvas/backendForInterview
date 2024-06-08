const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Dummy Route");
});

// dynamic Routing and accessing them using params
app.get("/profile/:username", (req, res) => {
  console.log(req.params.username);
  const { username } = req.params;
  res.send(`Welcome to ${username}'s Profile`);
});

app.listen(3000);
