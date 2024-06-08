const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("combined"));
app.use(morgan("tiny"));
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Home Dummy Route");
});

app.listen(3000);
