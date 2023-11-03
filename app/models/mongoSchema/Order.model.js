const mongoose = require("../../config/mongodb.config");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "canceled"],
    default: "pending",
  },
  dateCmd: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
