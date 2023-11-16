const userController = require("../controller/Auth.controller");
const router = require("express").Router();
// for user to sign in or sign up....
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;
