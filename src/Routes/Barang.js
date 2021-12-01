const express = require("express");
const Router = express.Router();
const response = require("../Helpers/Response");

Router.post("/", (req, res) => {
  res.json(response.success("Berhasil Menampilkan Data Barang"));
});

module.exports = Router;
