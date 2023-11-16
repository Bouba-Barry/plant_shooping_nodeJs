const itemController = require("../controller/Item.controller");
const orderController = require("../controller/Order.controller");
const authMiddleware = require("../middleware/authJwt");
const userController = require("../controller/User.controller");

const router = require("express").Router();

// Retrieve all items ....
router.get("/items", itemController.findItems);

// let's securise other route ....
router.use(authMiddleware.verifyToken);

// for user ....
router.get("/users", userController.findAllUser);

// for order .....
router.post("/order", orderController.createOrder);
router.get("/order", orderController.findOrder);

router.post("/items", itemController.createItem);

module.exports = router;
