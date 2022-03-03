
const mongoose = require("mongoose");
const users = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    lastContact: { type: Date },
    isConnected: { type: Boolean },
    picture: { type: String },
  },
  { timestamps }
);
module.exports = mongoose.model("user", users);
