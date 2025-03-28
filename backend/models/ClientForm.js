// server/models/ClientFormModel.js

const mongoose = require("mongoose");

const ClientFormSchema = new mongoose.Schema(
  {
    budget: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
  },
//   { timestamps: true }
);

const ClientForm = mongoose.model("ClientForm", ClientFormSchema);

module.exports = ClientForm;
