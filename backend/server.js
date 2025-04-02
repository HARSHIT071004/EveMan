const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const eventRoutes = require("./Routes/Eventroutes");
const clientroute = require("./Routes/Clientroute");
const signuproute = require("./Routes/signuproutes");
const loginroutes = require("./Routes/Loginroutes");
const alleventroutes = require("./Routes/Alleventroutes");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const app = express();

// Middleware setup
app.use(cors({
    origin: process.env.NODE_DEV === "production" ? "https://eveman-two.vercel.app/" : "http://localhost:5173",
    credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to the server!");
});

// Routes
app.use("/api", eventRoutes);
app.use("/api", clientroute);
app.use("/api", signuproute);
app.use("/api", loginroutes);
app.use("/api", alleventroutes);

app.get("/api/users", async (req, res) => {
  try {
    const users = await Signup.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB "))
  .catch((err) => console.error("MongoDB connection error:", err));


// Server को HTTP server से run करो
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
