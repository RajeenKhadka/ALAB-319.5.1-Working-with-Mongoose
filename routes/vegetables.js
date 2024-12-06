const express = require("express");
const router = express.Router();
const Vegetable = require("../models/vegetables");

router.get("/seed", async (req, res) => {
  try {
    await Vegetable.create([
      {
        name: "grapefruit",
        color: "pink",
        readyToEat: true,
      },
      {
        name: "grapes",
        color: "purple",
        readyToEat: true,
      },
      {
        name: "apple",
        color: "green",
        readyToEat: false,
      },
      {
        name: "fig",
        color: "yellow",
        readyToEat: true,
      },
      {
        name: "grapes",
        color: "green",
        readyToEat: false,
      },
    ]);

    res.status(200).redirect("/api/vegetables");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const foundVegetables = await Vegetable.find({});
    res.status(200).json(foundVegetables);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
