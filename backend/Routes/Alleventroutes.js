




const express = require("express");
const AllEvent = require("../models/allevent"); 
const router = express.Router();

router.post("/allevents", async (req, res) => {
  try {
    // console.log("Received Data:", req.body);
    const { selectedServices } = req.body;

    const newEvent = new AllEvent({
      selectedServices,
    });

    await newEvent.save();
    res.status(200).json({ message: "We get all the details" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;



