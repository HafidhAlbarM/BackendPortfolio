const express = require("express");
const Router = express.Router();

const AuthRoutes = require("./Routes/Auth");
const BarangRoutes = require("./Routes/Barang");

Router.use("/auth", AuthRoutes);
Router.use("/barang", BarangRoutes);

module.exports = Router;
