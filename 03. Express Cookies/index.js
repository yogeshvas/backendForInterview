const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.get("/", (req, res, next) => {
  res.send("Hey");
});

app.get("/check", function (req, res, next) {
  console.log(req.cookies.banned);
  res.send("checking");
});
app.get("/banned", (req, res, next) => {
  res.cookie("banned", "true"); //set the cookie
  //cookie set karne ke liye koi packahe nhi chaiye hota, lekin read karne ke liye chaiye hota hai
  res.send("Banned");
});

app.listen(3000);
