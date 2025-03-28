const mongoose=require("mongoose")
const EventSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    lowercase:true,
  },
  // email:{
  //   type:String,
  //   required:true,
  //   lowercase:true,

  // },
  description:{
    type:String,
    required:true,
    lowercase:true,
  },
  date:{
type:String,
required:true,
  },

})
const Event=mongoose.model("Event", EventSchema)
module.exports=Event;