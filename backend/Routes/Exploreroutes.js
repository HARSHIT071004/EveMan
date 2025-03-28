// const express = require("express");
// const Event = require("../models/Explore");

// const router = express.Router();

// router.post("/explore", async (req, res) => {
//   try {
//     const { events,loading,error } = req.body;
//     const newEvent = new Event({ events.loading,error });

//     await newEvent.save();
//     res.status(201).json({ message: "Event created successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;
