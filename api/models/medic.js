const mongoose = require("mongoose");
require("../models/user");


const medicSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  user:{type: mongoose.Schema.ObjectId, ref:"User", required: false},
  addres: String,
  phoneNumbre : Number

});

module.exports = mongoose.model("Medic", medicSchema);