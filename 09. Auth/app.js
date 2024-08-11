import express from "express";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
const app = express();
import jwt from "jsonwebtoken";

app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hey");
});

app.post("/encrypt", async (req, res) => {
  let salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash("hello", salt);
  res.send(pass);
});

app.post("/checkPass", async (req, res) => {
  bcrypt.compare("hello", salt);
});

app.post("/tokenMaker", async (req, res) => {
  const token = jwt.sign({ name: "Yogesh" }, "huihuihui ");
  res.send(token);
});

app.post("/decodetoken", async (req, res) => {
  const data = jwt.decode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFyc2giLCJpYXQiOjE3MjE3MDkwNjl9.7hgn8yV-nsJwOdwo0HprFiXkvDQH4HCRyoRQ3V86ars",
    "huihuihui"
  );
  res.send(data);
});

app.get("/set-cookie", (req, res) => {
  res.cookie("name", "yogesh", {
    maxAge: 1000000,
    httpOnly: true,
    secure: true,
  });
  res.send("cookie set");
});

app.get("/read-cookie", (req, res) => {
  const resp = req.cookies.name;
  res.send(resp);
});

app.listen(3000);
