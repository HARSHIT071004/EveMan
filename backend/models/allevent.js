// const mongoose=require("mongoose")
// const alleventSchema = new mongoose.Schema({
//     selectedServices: { type: String, required: true, unique: true },
//   });
  
//   module.exports = mongoose.model("allnew", alleventSchema);
// const mongoose = require("mongoose");

// const allEventSchema = new mongoose.Schema({
//   selectedServices: { type: [String], required: true }, 
// });

// module.exports = mongoose.model("AllEvent", allEventSchema);



const mongoose = require("mongoose");

const allEventSchema = new mongoose.Schema({
  selectedServices: [
    {
      title: { type: String, required: true },
      desc: { type: String, required: true },
    }
  ],
});

module.exports = mongoose.model("AllEvent", allEventSchema);
