const express = require("express");
const Router = express.Router();

const AuthController = require("../Controllers/Auth");

Router.post("/signup", AuthController.signup);

module.exports = Router;
