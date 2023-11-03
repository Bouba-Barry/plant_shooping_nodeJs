const mongoose = require("../../config/mongodb.config");

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
});
const User = mongoose.model("user", UserSchema);

module.exports = User;
