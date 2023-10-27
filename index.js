const express = require("express");
const app = express();
const cors = require("cors");
const item_router = require("./app/routes/items.routes");

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcome to my application" });
});

app.use("/api", item_router);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
