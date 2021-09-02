const express = require("express");
const router = express.Router();

// Route to get all techs from the database. GET request to "api/techs". Public access.
router.get("/", (req, res) => {
  res.send("Route to get all techs.");
});

// Route to add a tech to the database. POST request to "api/techs". Public access.
router.post("/", (req, res) => {
  res.send("Route to add a tech.");
});

// Route to delete a tech from the database. DELETE request to "api/techs/:id". Public access.
router.delete("/:id", (req, res) => {
  res.send("Route to delete a tech.");
});

module.exports = router;
