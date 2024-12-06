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

app.use("/api/vegetables", vegetableRoutes);

// app.get("/vegetables", async (req, res) => {
//   try {
//     const foundVegetables = await Vegetable.find({});
//     res.status(200).render("vegetables/Index", { Vegetables: foundVegetables });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });
