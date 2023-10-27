const { Sequelize } = require("sequelize");

const DATABASE = "plant_shooping_db";
const USER = "bouba";
const PASSWORD = "bouba";
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: process.env.HOST || "localhost",
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
});

module.exports = sequelize;
