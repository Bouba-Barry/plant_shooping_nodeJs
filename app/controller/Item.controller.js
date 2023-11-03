const Plant = require("../models/Item.model");

exports.findAllItems = (req, res) => {
  Plant.findAll()
    .then((data) => {
      console.log("controller : ", data);
      return res.send(data);
    })
    .catch((err) => {
      console.log("error ... : ");
      res.status(500).send({
        message:
          err.message || " some error occured while retrieving all items.",
      });
    });
};
