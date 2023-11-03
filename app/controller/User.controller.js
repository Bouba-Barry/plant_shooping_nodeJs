const User = require("../models/mongoSchema/User.model");

exports.saveUser = async (req, res) => {
  try {
    const userToSave = req.body.user;
    const newUser = new User(userToSave); // Créez une nouvelle instance du user...
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || "Une erreur s'est produite" });
  }
};

exports.findAllUser = async (req, res) => {
  await User.find()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || " some error occured" })
    );
};
