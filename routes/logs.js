const express = require("express");
const router = express.Router();

// Route to get all logs from the database. GET request to "api/logs". Public access.
router.get("/", (req, res) => {
  res.send("Route to get all logs.");
});

// Route to add a log to the database. POST request to "api/logs". Public access.
router.post("/", (req, res) => {
  res.send("Route to add a log.");
});

// Route to update a log in the database. PUT request to "api/logs/:id". Public access.
router.delete("/:id", (req, res) => {
  res.send("Route to update a log.");
});

// Route to delete a log from the database. DELETE request to "api/logs/:id". Public access.
router.delete("/:id", (req, res) => {
  res.send("Route to delete a log.");
});

module.exports = router;
