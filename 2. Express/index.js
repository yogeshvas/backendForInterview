const express = require("express");
const expressSession = require("express-session");
const flash = require("connect-flash");
const cors = require("cors");
const app = express(); //app ek constant hai jisme express ki sari powers hain

//cors
// -> browser mein ekk secutity feature hota hai, jiske tehat aap kisi aur domain ka data nhi managa sakte and and browser is aapko rokta hai, agar aap cahate hain ki brower aapko allow kare to aap us website ke server ke through cors enable karna higa
app.use(cors());
app.get("/sharable", cors(), function (req, res, next) {});

//cookie hota hai browser pe data save karne ke liye
//session hota hai server pe data save karne ke liye
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "anything",
  })
);

app.use(flash());

//how to differention if its a middleware, then check if the funtion has access to Request, Response and Next
//jab bhi aap browser se koi request backend bhejte hain, to wo apne route par jaati hai and agar aap chaate hai route par jaane se pahele vo request mein kuch check karna cahate hain ya kuch addd karna cahate un sare casees mein middleware use hota hai
app.use("/", function (req, res, next) {
  console.log("HEllo");
  next();
});

app.get("/", (req, res, next) => {
  req.flash("error", "Invalid Credentials");
  res.redirect("/error");
});

app.get("/error", (req, res, next) => {
  let mesage = req.flash("error");
  res.send(mesage);
});
//grabbing all non existing routes
//this is always at the last
app.get("*", (req, res, next) => {
  res.send("If nothing works,I Do");
});

app.listen(3000, () => {
  console.log("app is running at port 3000");
});
