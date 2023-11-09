const mongoose = require("../../config/mongodb.config");

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  adress: String,
});
const User = mongoose.model("user", UserSchema);

module.exports = User;
