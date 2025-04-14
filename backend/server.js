const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const eventRoutes = require("./Routes/Eventroutes");
const clientroute = require("./Routes/Clientroute");
const signuproute = require("./Routes/Signuproutes");
const loginroutes = require("./Routes/Loginroutes");
const alleventroutes = require("./Routes/Alleventroutes");

const Signup = require("./Models/SignupModel"); // <-- Make sure this path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware setup
app.use(cors({
  origin: "https://eveman-two.vercel.app", // Your frontend live domain
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.json("Welcome to the Eveman server 🚀");
});

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// ✅ All API routes
app.use("/api", eventRoutes);
app.use("/api", clientroute);
app.use("/api", signuproute);
app.use("/api", loginroutes);
app.use("/api", alleventroutes);

// ✅ Optional: Get all users (debug/admin route)
app.get("/api/users", async (req, res) => {
  try {
    const users = await Signup.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
