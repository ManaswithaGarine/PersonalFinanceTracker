const mongoose = require('mongoose');

const debtSchema = new mongoose.Schema({
  userId: String,
  personName: String,
  amount: Number,
  type: String,
  dueDate: Date,
  note: String,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model('Debt', debtSchema);