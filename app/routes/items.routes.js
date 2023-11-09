const itemController = require("../controller/Item.controller");
const orderController = require("../controller/Order.controller");
const userController = require("../controller/User.controller");

const router = require("express").Router();

// Retrieve all items ....
router.get("/items", itemController.findItems);
router.post("/items", itemController.createItem);

// for user ....
router.post("/users", userController.saveUser);
router.get("/users", userController.saveUser);
router.post("/users/auth", userController.findUserByCredentials);

// for order .....
router.post("/order", orderController.createOrder);
router.get("/order", orderController.findOrder);

module.exports = router;
