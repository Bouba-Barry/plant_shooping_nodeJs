const User = require("../models/mongoSchema/User.model");

exports.findAllUser = async (req, res) => {
  await User.find()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || " some error occured" })
    );
};
