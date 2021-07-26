const jwt = require("jsonwebtoken")
const express = require("express");
const {add,getByName} = require("../controller/user_controller");
 const {OK,CREATED}= require("../helpers/status_codes");
const challengeRouter = require("./challenge_router")

const isAuth = require("../middleware/isAuth")
const router = express.Router();

router.post("/signup",async (request,response)=>{
   
    const user = request.body
    const newUser = await add(user)
    response.status(CREATED).json(newUser);
    response.redirect("/login"); 
})



router.post("/login",isAuth,async(request,response)=>{
   
    const user = await getByName(request.body.name,request.body.password);

    const MAXAGE = Math.floor(Date.now()/1000)+(60*60);
    response.cookie("jwt",user.token,{MAXAGE});
    response.status(OK).json({user:user,token:user.token});
    response.redirect("/challenges"); 
})

router.get("/logout/:id",async(request, response) => { 
    response.clearCookie("jwt");    
     response.redirect("/login"); 
   })

module.exports = router;