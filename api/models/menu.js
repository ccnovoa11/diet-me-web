const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  caloriesTot:Number,
  carbsTot: Number,
  fatsTot: Number,
  protein: Number,
  food:[{
    name:String,
    carbs: Number,
    fats: Number,
    protein: Number,
    calories: Number
  }]
});

module.exports = mongoose.model("Menu", menuSchema);