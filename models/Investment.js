const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  userId: String,
  stockName: String,
  exchange: String,
  buyPrice: Number,
  quantity: Number,
  date: Date
});

module.exports = mongoose.model('Investment', investmentSchema);