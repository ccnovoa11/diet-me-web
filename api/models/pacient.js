const mongoose = require("mongoose");

const pacientSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name : String,
  age: Number,
  sex: String,
  phoneNumber:Number,
  weight: Number,
  height: Number, 
  bmi: Number,
  whyLose: String,
  lifeStyle: String,
  sport: Boolean,
  intensity: String,
  muchTime: String,
  dietType: String,
  user:{type: mongoose.Schema.ObjectId, ref:"User", required: false},
  menus: [{type:mongoose.Schema.ObjectId, ref:"Menu", required: false}]
});

module.exports = mongoose.model("Pacient", pacientSchema);