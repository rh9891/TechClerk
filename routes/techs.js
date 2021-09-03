const express = require("express");
const router = express.Router();

const Tech = require("../models/Tech");

// Route to get all techs from the database. GET request to "api/techs". Public access.
router.get("/", async (req, res) => {
  try {
    const techs = await Tech.find({});

    res.json(techs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// Route to add a tech to the database. POST request to "api/techs". Public access.
router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const newTech = new Tech({
      firstName,
      lastName,
    });

    const tech = await newTech.save();

    res.json(tech);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// Route to delete a tech from the database. DELETE request to "api/techs/:id". Public access.
router.delete("/:id", async (req, res) => {
  try {
    let tech = await Tech.findById(req.params.id);

    if (!tech) {
      return res.status(404).json({ message: "Technician not found." });
    }

    await Tech.findByIdAndDelete(req.params.id);

    res.json({ message: "Technician has been deleted." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

module.exports = router;
