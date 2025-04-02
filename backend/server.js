const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Server } = require("socket.io"); // Socket.io import किया
const http = require("http"); // HTTP server के लिए
require("dotenv").config();

const eventRoutes = require("./Routes/Eventroutes");
const clientroute = require("./Routes/Clientroute");
const signuproute = require("./Routes/signuproutes");
const loginroutes = require("./Routes/Loginroutes");
const alleventroutes = require("./Routes/Alleventroutes");

const app = express();
const server = http.createServer(app); // HTTP server बनाया
const PORT = 5000;

const dev = process.env.NODE_DEV;

// Middleware setup
app.use(cors({
    origin: dev !== "production" ? "http://localhost:5173" : "https://eveman-two.vercel.app/",
    credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
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
  .connect("mongodb://127.0.0.1:27017/eveman", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB "))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Socket.io Server Setup  
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // अपने frontend के URL को यहाँ डालो
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Message received:", data);
    io.emit("message", data); // सभी users को message भेजो
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Server को HTTP server से run करो
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
