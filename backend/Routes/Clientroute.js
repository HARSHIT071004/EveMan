
const express = require("express");
const ClientForm = require("../models/ClientForm");
const router = express.Router();

router.post("/clientevent", async (req, res) => {
  try {
    const { budget, requirements, category } = req.body;
    const newClientform = new ClientForm({
      budget,
      category,
      requirements,
    });

    await newClientform.save();
    res.status(200).json({ message: "Client form submitted successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to submit client form!" });
  }
});

module.exports = router;
