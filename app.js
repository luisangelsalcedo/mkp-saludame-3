const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
  const { name } = req.body;
  const [first, ...rest] = name.split("");

  res.send(`<h1>Hola ${first.toUpperCase()}${rest.join("")}!</h1>`);
});

app.listen("3000", () => {
  console.log("server run");
});
