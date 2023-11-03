const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://bboubacarbarry2001:o5wIorAkvbKrw8ua@eduboubacluster.sq65m4b.mongodb.net/plant_shooping_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connection reussie !"))
  .catch((err) => {
    console.log("error connecting : " + err);
    process.exit();
  });

module.exports = mongoose;
