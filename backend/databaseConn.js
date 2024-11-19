const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Facebook");

let userDbSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  day: String,
  month: String,
  year: String,
  gender: String,
  phoneNumber: String,
  password: String,
});

let userDbModel = mongoose.model("users", userDbSchema);

module.exports = userDbModel;
