const { Sequelize } = require("sequelize");
const sequelize = require("../config/sequelize");

const Plant = sequelize.define("items", {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING(255), allowNull: false },
  category: { type: Sequelize.STRING },
  light: { type: Sequelize.INTEGER },
  water: { type: Sequelize.INTEGER },
  price: { type: Sequelize.INTEGER },
});

// Plant.sync({force:true})

module.exports = Plant;
