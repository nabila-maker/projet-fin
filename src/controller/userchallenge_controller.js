//find all

const {challenge} = require("../models");
const {user} = require("../models");

const userChallengeController = {
    getAllChallenge: async () => {
        const challengee = await challenge.findAll({
             //order:[["tag"]],
            attributes:["title","tag"],
            raw: true,
        });
        return challengee;
   
    },

    getByUserId: async (userId,challengeId) => {
        const userchallenge = await Challenge.findOne({
          where: {
            challenge_id,
            user_id
          },
          attributes: {exclude: ["dateCreated"]},
    
        });
        if (!User) {
          throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
        }
        return
    }    
}