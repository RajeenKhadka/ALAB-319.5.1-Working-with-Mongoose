const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

//Imports
const db = require("./db/conn");
const Vegetable = require("./models/vegetables");
const vegetableRoutes = require("./routes/vegetables");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("You have arrived");
});

//localhost:5052/api/vegetables
app.use("/api/vegetables", vegetableRoutes);
