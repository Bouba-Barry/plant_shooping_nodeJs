const User = require("../models/mongoSchema/User.model");
const authConfig = require("../config/auth.config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifySignUp = require("../middleware/verifySignUp");

exports.signup = async (req, res) => {
  try {
    const isEmailDuplicated = await verifySignUp.checkDuplicatedEmail(
      req.body.email
    );

    if (isEmailDuplicated) {
      return res
        .status(409)
        .json({ message: "Failed! Email is already in use!" });
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const userToSave = {
      email: req.body.email,
      password: hashedPassword,
    };
    const newUser = new User(userToSave);
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ message: err.message || "Une erreur s'est produite" });
  }
};

exports.signin = async (req, res) => {
  try {
    console.log("user sended is :  ", req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (passwordIsValid) {
        console.log("user id : ", user);
        const token = jwt.sign({ id: user._id }, authConfig.secret, {
          expiresIn: 86400, // 24 hours
        });
        return res.status(200).send({
          id: user._id,
          email: user.email,
          accessToken: token,
        });
      } else {
        return res
          .status(401)
          .send({ accessToken: null, message: "Mot de passe incorrect" });
      }
    } else {
      return res
        .status(404)
        .send({ message: "Aucun utilisateur trouvé pour cet e-mail" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || "Une erreur s'est produite" });
  }
};

exports.signOut = (req, res) => {};
