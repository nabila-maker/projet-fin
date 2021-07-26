//find all

const {challenge} = require("../models");
const {user} = require("../models");
const{userChallenge} = require ('../models');

const userChallengeController = {

    getUserChallenge: async (user_id,challenge_id,status) => {
        const userchallenge = await userChallenge.findAll({
          where: {
            user_id,
            challenge_id,
           status

          },
         
    
        });
        if (!userchallenge) {
          throw new NotFoundError("Ressource introuvable", "Ce challenge n'a pas été sélectionné");
        }
        return userchallenge;
    },

    addChallenge: async (data)=>{
        const  userChoose = await userChallenge.create(data)
  
        return userChoose;
    },

    addValidatedChallenge: async(user_id,challenge_id,data)=>{

        const challengeValidated = await userChallenge.findOne({
            where:{
                user_id,
                challenge_id,
                
              
            }
            

            
        })
        await challengeValidated.update(data)
        return challengeValidated;

    },
}



module.exports = userChallengeController;