const mongoose = require("mongoose");

const employee = new mongoose.Schema({
  firstName: String,
  lastName: { type: String, require: true },
  email: String,
  password: String,
  age: { type: Number, require: true },
  isAdmin: false,
});
module.exports = mongoose.model('Employee', employee);
