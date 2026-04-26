const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: String,
  name: String,
  amount: Number,
  billingCycle: String,
  nextPayment: Date
});

module.exports = mongoose.model('Subscription', subscriptionSchema);