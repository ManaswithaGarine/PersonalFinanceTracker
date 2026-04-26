const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: String,
  type: String,
  amount: Number,
  category: String,
  date: Date,
  note: String
});

module.exports = mongoose.model('Transaction', transactionSchema);