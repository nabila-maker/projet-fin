const express = require("express");
const server = express();
const routes = require("./src/routes");
const cors = require("cors");
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')


server.use("/api",cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cookieParser());
server.use("/api",routes);

module.exports = server;