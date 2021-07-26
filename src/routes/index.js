const express = require("express");
require("express-async-errors");

const challengeRouter = require("./challenge_router");
const userRouter = require("./user_router");
const userchallengeRouter = require("./userChallenge_router");
const challengeController = require("../controller/challenge_controller");

const mainRouter = express.Router();

mainRouter.use("/challenges",challengeRouter);
mainRouter.use("/user",userRouter);
mainRouter.use("/account",userchallengeRouter);


module.exports = mainRouter;
