const mongoose = require("../../config/mongodb.config");

const ItemSchema = mongoose.Schema({
  name: String,
  category: String,
  cover: String,
  light: Number,
  water: Number,
  price: Number,
});
const Item = mongoose.model("item", ItemSchema);

module.exports = Item;
