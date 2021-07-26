const express = require("express");
const { OK } = require("../helpers/status_codes");
const {getAllChallenge, getOneChallenge} = require("../controller/challenge_controller");
// const challengeController = require("../controller/challenge_controller");


const router = express.Router();

router.get("/",async (request,response)=>{
    const challenge = await getAllChallenge();
    response.status(OK).json(challenge);
})

router.get("/:id",async(request,response)=>{
    const challenger = await getOneChallenge();
    response.status(OK).json(challenger)
})

module.exports = router;