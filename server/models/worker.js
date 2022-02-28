const mongoose = require("mongoose");

const worker = new mongoose.Schema({
  firstName: String,
  lastName: { type: String, require:true },
  email: String,
});
module.exports = mongoose.model("worker", worker);
