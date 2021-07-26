const express = require("express");
const {getUserChallenge,addChallenge,addValidatedChallenge} = require("../controller/userchallenge_controller");
const {OK,CREATED}= require("../helpers/status_codes");
const isAuth = require("../middleware/isAuth")
// const router = require("./user_router");
const router = express.Router();


router.get("/:id",isAuth,async (request,response)=>{
    const{id}= request.params
    const userchallenge = await getUserChallenge(id,request.body.id,request.body.status);
    response.status(OK).json(userchallenge);
})

router.post("/challenges",async(request,response)=>{
  
    const data = request.body;
  
    const chooseChallenge = await addChallenge(data);
    response.status(CREATED).json(chooseChallenge);
    
})

router.put("/challenges/validated",async(request,response)=>{

    const data = request.body;
    
    const challengeValidated = await addValidatedChallenge(request.body.challenge_id,data);
    response.status(CREATED).json(challengeValidated);
    
})




module.exports = router;