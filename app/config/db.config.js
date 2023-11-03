module.exports = {
  database: "plant_shooping_db",
  username: "root",
  password: "",
  host: "localhost",
  dbType: "mysql",
  dbPool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  corsOptions: { origin: "http://localhost:3000" },
  PORT: 8081,
};
