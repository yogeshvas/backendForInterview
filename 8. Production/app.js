import express from "express";

const app = express();

app.get("/", () => {
  console.log("Working");
});

app.listen(process.env.PORT || 3000);
