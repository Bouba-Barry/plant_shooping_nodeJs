const Order = require("../models/mongoSchema/Order.model");
/**
 *
 * @param {*} req
 * @param {*} res
 */

exports.findOrder = async (req, res) => {
  await Order.find()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || " some error occured" })
    );
};

exports.createOrder = async (req, res) => {
  try {
    const orderToSave = req.body.order;
    const newOrder = new Order(orderToSave); // Créez une nouvelle instance de l'item
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || "Une erreur s'est produite" });
  }
};
