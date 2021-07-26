const {challenge} = require("../models");

const challengeController = {
    getAllChallenge: async () => {
        const challengee = await challenge.findAll({
            where: {
                id,
                title,
                tag
             },
    
            attributes: {exclude: ["createdAt","updatedAt"]},
            raw: true,
        });
        if (!challengee) {
            throw new NotFoundError("Ressource introuvable", "Ces challenges n'existent pas");
          }
        return challengee;
   
    },

    getOneChallenge: async () => {
        const challenger = await challenge.findOne({
             //order:[["tag"]],
            attributes:["title","description","tag"],
            raw: true,
        });
        if (!challenger) {
            throw new NotFoundError("Ressource introuvable", "Ce challenge n'existe pas");
          }
        return challenger;
   
    },
};



module.exports = challengeController;