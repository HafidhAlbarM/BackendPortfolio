const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require("./src/api");

app.use("/api", apiRoutes);
app.get("/", (req, res) => {
  res.send("Welcome To POS Backend, click here to download Postman Collection");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER BERJALAN PADA PORT ${PORT}`);
});
