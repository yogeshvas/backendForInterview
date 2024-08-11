const express = require("express");
const { userModel, validateModel } = require("./models/user-model");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("chal rha hai");
});

app.post("/create", async function (req, res) {
  const { name, username, age, contact, email } = req.body;
  let error = validateModel({ name, username, age, contact, email });
  if (error) return res.status(500).send(error.message);

  res.send("everything worked");
});



app.listen(3000);
