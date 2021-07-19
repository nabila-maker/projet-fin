const express = require("express");
require("express-async-errors");

const challengeRouter = require("./challenge_router");
const userRouter = require("./user_router");
const userchallengeRouter = require("./userchallenge_router");
const challengeController = require("../controller/challenge_controller");

const mainRouter = express.Router();

mainRouter.use("/challenge",challengeRouter);
//mainRouter.use("/user",userRouter);
//mainRouter.use("/userchallenge",userchallengeRouter);

module.exports = mainRouter;
