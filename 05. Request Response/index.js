const express = require("express");
const app = express();
// most used request and response
app.get("/", (request, response) => {
  console.log(request.params);
  console.log(request.body);
  console.log(request.cookies);
  console.log(request.query);
  console.log(request.ip);
  console.log(request.headers);
  console.log(request.url);
  console.log(request.method);
  response.send("");
  response.status();
  response.json({});
  response.sendStatus();
  response.set();
});

app.listen(3000);
