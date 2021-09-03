const express = require("express");
const router = express.Router();

const Log = require("../models/Log");

// Route to get all logs from the database. GET request to "api/logs". Public access.
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find({}).sort({
      date: -1,
    });

    res.json(logs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// Route to add a log to the database. POST request to "api/logs". Public access.
router.post("/", async (req, res) => {
  const { message, attention, tech, date } = req.body;

  try {
    const newLog = new Log({
      message,
      attention,
      tech,
    });

    const log = await newLog.save();

    res.json(log);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// Route to update a log in the database. PUT request to "api/logs/:id". Public access.
router.put("/:id", async (req, res) => {
  const { message, attention, tech, date } = req.body;

  const logFields = {};
  if (message) logFields.message = message;
  if (attention === true) logFields.attention = attention;
  if (attention === false) logFields.attention = attention;
  if (tech) logFields.tech = tech;
  if (date) logFields.date = date;

  try {
    let log = await Log.findById(req.params.id);

    if (!log) {
      return res.status(404).json({ message: "Log not found." });
    }

    log = await Log.findByIdAndUpdate(
      req.params.id,
      {
        $set: logFields,
      },
      { new: true }
    );

    res.json(log);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// Route to delete a log from the database. DELETE request to "api/logs/:id". Public access.
router.delete("/:id", async (req, res) => {
  try {
    let log = await Log.findById(req.params.id);

    if (!log) {
      return res.status(404).json({ message: "Log not found." });
    }

    await Log.findByIdAndDelete(req.params.id);

    res.json({ message: "Log has been deleted." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// Route to search and filter through logs in the database. GET request to "/:q". Public access.
router.get("/:q", async (req, res) => {
  try {
    const logs = await Log.find({ logs: req._id }).sort({
      date: -1,
    });

    let searchContent = logs.filter((log) => {
      let regex = new RegExp(req.params.q, "gi");
      return log.message.match(regex) || log.tech.match(regex);
    });

    res.json(searchContent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

module.exports = router;
