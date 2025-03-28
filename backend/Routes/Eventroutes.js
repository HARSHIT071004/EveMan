// const express = require("express");
// const Event = require("../models/Event");
// const router = express.Router();
// const authMiddleware= require("../middlewares/authMiddleware")
// router.post("/createevent",authMiddleware, async (req, res) => {
//   try {
//     const { name, description, date } = req.body;
//     const newEvent = new Event({
//       name,
//       // email,
//       description,
//       date,
//       createdBy: req.user.id,  // User ID store कर लो
//     });
//     await newEvent.save();
//     res.status(200).json({ message: "Event successfully created" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;


const express = require("express");
const Event = require("../models/Event");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/createevent", auth, async (req, res) => {
  try {
    const { name, description, date } = req.body;
    const newEvent = new Event({
      name,
      description,
      date,
      createdBy: req.user.id,  
    });
    await newEvent.save();
    res.status(200).json({ message: "Event successfully created" });
  } catch (error) {
    res.status(500).json({ message: "unauthorized", error });
  }
});

module.exports = router;
