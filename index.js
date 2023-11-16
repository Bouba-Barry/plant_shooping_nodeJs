const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const app_router = require("./app/routes/app.routes");
const auth_router = require("./app/routes/auth.routes");

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcome to my application" });
});

app.use("/", auth_router);
app.use("/api", app_router);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
