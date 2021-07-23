const jwt = require("jsonwebtoken")
const express = require("express");
const {add,getByName} = require("../controller/user_controller");
 const {OK,CREATED}= require("../helpers/status_codes");
const router = require("./challenge_router");
const isAuth = require("../middleware/isAuth")


router.post("/signup",async (request,response)=>{
   
    const user = request.body
    const newUser = await add(user)
    response.status(CREATED).json(newUser);
})



router.post("/login",async(request,response)=>{
   
    const user = await getByName(request.body.name,request.body.password);

    const MAXAGE = Math.floor(Date.now()/1000)+(60*60);
    response.cookie("jwt",user.token,{MAXAGE});
    response.status(OK).json({user:user,token:user.token});
})

router.get("/logout/:id",async(request, response) => { 
    response.clearCookie("jwt");    
     response.redirect("/"); 
   })

module.exports = router;