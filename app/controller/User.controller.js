const User = require("../models/mongoSchema/User.model");

exports.saveUser = async (req, res) => {
  try {
    const userToSave = req.body;
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

exports.findUserByCredentials = async (req, res) => {
  try {
    console.log("user :  ", req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.password === req.body.password) {
        const responseData = {
          user: {
            _id: user._id,
            email: user.email,
          },
          message: "Utilisateur trouvé avec succès",
        };
        res.send(responseData);
      } else {
        res.status(401).send({ message: "Mot de passe incorrect" });
      }
    } else {
      res
        .status(404)
        .send({ message: "Aucun utilisateur trouvé pour cet e-mail" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || "Une erreur s'est produite" });
  }
};
