const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Seja bem vindo ao nosso site!");
});

app.get("/artigos/:id", function (req, res) {
  res.send("Página de artigos");
});

app.get("/contato", function (req, res) {
  res.send("Página de contato");
});

app.listen(8081, function () {
  console.log("Server online localhost:8081 ok");
});
