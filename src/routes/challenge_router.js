const express = require("express");
const { OK } = require("../helpers/errors/status_codes");
const {getAllChallenge} = require("../controller/challenge_controller");
const challengeController = require("../controller/challenge_controller");

const router = express.Router();

router.get("/",async (request,response)=>{
    const challenge = await getAllChallenge();
    response.status(OK).json(challenge);
})

module.exports = router;