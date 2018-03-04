const mongoose = require("mongoose");

const daySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  menus: [{ type: mongoose.Schema.ObjectId, ref: "Menu", required: false }],
  date: Date,
  dayCalories: Number,
});

module.exports = mongoose.model("Day", daySchema);