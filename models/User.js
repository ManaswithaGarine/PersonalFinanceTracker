const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true   // 🔥 THIS IS MISSING IN YOUR PROJECT
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);