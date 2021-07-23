const {challenge} = require("../models");

const challengeController = {
    getAllChallenge: async () => {
        const challengee = await challenge.findAll({
             //order:[["tag"]],
            attributes:["title","tag"],
            raw: true,
        });
        return challengee;
   
    },

    getOneChallenge: async () => {
        const challenger = await challenge.findOne({
             //order:[["tag"]],
            attributes:["title","description","tag"],
            raw: true,
        });
        return challenger;
   
    },
};



module.exports = challengeController;