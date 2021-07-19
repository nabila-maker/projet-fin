const {user} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {NotFoundError, BadRequestError, UnauthorizedError} = require("../helpers/errors");

async function getEncryptedPassword(password){
    let error,en
}
const userController = {
    getAllUser: async () => {
        const userr = await user.findAll({

            attributes:["title","description","completed","tag"],
            raw: true,
        });
        return challengee;


      
    },
};

module.exports = challengeController;