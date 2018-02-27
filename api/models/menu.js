const mongoose = require('mongoose');
const menuSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    caloriesTot:Number,
    carbsTot: Number,
    fatsTot: Number,
    protein: Number
});

module.exports = mongoose.model('Menu', menuSchema);