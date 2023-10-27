const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/db.config");

const Item = sequelize.define("items", {
  id: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING(50), allowNull: false },
  category: { type: DataTypes.STRING(20), allowNull: false },
  light: { type: DataTypes.INTEGER },
  water: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER },
});

module.exports = Item;
