const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection reussie !"))
  .catch((err) => {
    console.log("error connecting : " + err);
    process.exit();
  });

module.exports = mongoose;
