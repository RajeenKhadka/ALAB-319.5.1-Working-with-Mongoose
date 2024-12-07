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
    /*Vegetable.find({})
Vegetable: Refers to a Mongoose model, which is a representation of a MongoDB collection (like a table in a relational database). Each document in this collection corresponds to an individual record (e.g., a vegetable).
.find(): This is a Mongoose method used to retrieve documents (records) from the collection.
What the {} means
The empty curly braces {} inside .find({}) represent the query criteria.

Query Criteria: Specifies the conditions that documents must meet to be retrieved.
An empty query {} means:
"I’m not specifying any conditions."
"Return all documents in the collection."
This is like saying, "Show me everything."

The Result: foundVegetables
The await keyword ensures that the operation waits for the database to respond.
When the query completes, all the documents that match the criteria (in this case, all documents) are returned.
These documents are stored in the foundVegetables variable as an array of JavaScript objects.*/
    const foundVegetables = await Vegetable.find({});
    res.status(200).json(foundVegetables);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
