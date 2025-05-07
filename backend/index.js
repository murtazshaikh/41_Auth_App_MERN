const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter.js");
const ProductRouter = require("./Routes/ProductRouter.js");
require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8000;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
