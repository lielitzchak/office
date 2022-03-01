const mongoose = require("mongoose");

const employee = new mongoose.Schema({
  firstName: String,
  lastName: { type: String, require: true },
  email: String,
  age: { type: Number, require: true },
  isAdmin: false,
});
module.exports = employee;
