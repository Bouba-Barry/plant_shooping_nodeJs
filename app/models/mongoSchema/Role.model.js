const mongoose = require("../../config/mongodb.config");

const RoleSchema = mongoose.Schema({
  name: String,
});

const Role = mongoose.model("role", RoleSchema);

module.exports = Role;
