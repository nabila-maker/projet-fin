const {challenge} = require("../models");

const challengeController = {
    getAllChallenge: async () => {
        const challengee = await challenge.findAll({
            order:[["tag"]],
            attributes:["title","description","completed","tag"],
            raw: true,
        });
        return challengee;


      
    },
};

module.exports = challengeController;