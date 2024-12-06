const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

//Imports
const db = require("./db/conn");
const Vegetable = require("./models/vegetables");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("You have arrived");
});
