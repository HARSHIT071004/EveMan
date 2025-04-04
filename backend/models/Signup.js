const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
