const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const item_router = require("./app/routes/items.routes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcome to my application" });
});

app.use("/api", item_router);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
