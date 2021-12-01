const express = require("express");
const Router = express.Router();

const BarangController = require("../Controllers/Barang");

Router.post("/", BarangController.get);
Router.post("/add", BarangController.add);
Router.put("/update/:id_barang", BarangController.update);
Router.delete("/delete/:id_barang", BarangController.delete);

module.exports = Router;
