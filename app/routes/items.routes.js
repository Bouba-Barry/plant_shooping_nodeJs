const itemController = require("../controller/Item.controller");
const router = require("express").Router();

// Retrieve all items ....
router.get("/items", itemController.findAllItems);

module.exports = router;
