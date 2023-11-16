const User = require("../models/mongoSchema/User.model");

const checkDuplicatedEmail = async (email) => {
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking duplicated email:", error);
    throw new Error(
      "Une erreur s'est produite lors de la vérification de l'email"
    );
  }
};

module.exports = { checkDuplicatedEmail };
