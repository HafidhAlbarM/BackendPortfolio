const express = require("express");
const Router = express.Router();

const BarangRoutes = require("./Routes/Barang");

Router.use("/barang", BarangRoutes);

module.exports = Router;
