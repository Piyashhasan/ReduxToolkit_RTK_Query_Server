const mongoose = require("mongoose");

// --- SCHEMA MAKE FOR USER ---
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

// --- MODEL MAKE ---
const Users = mongoose.model("usersTable", userSchema);

module.exports = Users;
