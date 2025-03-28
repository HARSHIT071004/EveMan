// const bcrypt = require("bcryptjs");
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const Signup = require("../models/Signup");

// const router = express.Router();

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const existingUser = await Signup.findOne({ email });
//     if (!existingUser) {
//       return res.status(400).json({ message: "Invalid email " });
//     }
//     console.log("Entered Password:", password);
//     console.log("Stored Hashed Password:", existingUser.password)
//     const isMatch = await bcrypt.compare(password, existingUser.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "sheeerrrrrrrrr");

//     res.status(200).json({ message: "Login successful", token, user: existingUser });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// module.exports = router;


const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const Signup = require("../models/Signup");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await Signup.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid email" });
    }

    console.log("Entered Password:", password);
    console.log("Stored Hashed Password:", existingUser.password);

    const isMatch = await bcrypt.compare(password, existingUser.password);


    if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "sheeerrrrrrrrr",
      { expiresIn: "1h" }
    );

    res.setHeader('token',token);

    res.status(200).json({ message: "Login successful", token});
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
