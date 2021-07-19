const express = require("express");
const server = express();
const routes = require("./src/routes");
const cors = require("cors");

server.use("/api",routes);
server.use("/api",cors());



module.exports = server;