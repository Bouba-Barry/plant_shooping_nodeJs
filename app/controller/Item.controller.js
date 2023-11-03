//const Item = require("../models/mysqSchema/Item.model");
const Item = require("../models/mongoSchema/Item.model");

/**
 *
 * @param {*} req
 * @param {*} res
 */

exports.findItems = async (req, res) => {
  await Item.find()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || " some error occured" })
    );
};

exports.createItem = async (req, res) => {
  try {
    const itemToSave = req.body.item;
    const newItem = new Item(itemToSave); // Créez une nouvelle instance de l'item
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || "Une erreur s'est produite" });
  }
};
