const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/dogs", (req, res) => {
  res.send("Woof");
});

module.exports = app;
