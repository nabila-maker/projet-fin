// const {user} = require("../models");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const {NotFoundError, BadRequestError, UnauthorizedError} = require("../helpers/error");

// async function getEncryptedPassword(password){

//    let encryptedPassword= await bcrypt.hash(password,10)

//     return encryptedPassword;
// }

// const userController = {
    
    
//     getByName: async(name,password)=>{
//     const user = await user.findOne({
//         where:{
//             name
//         }
        
//     })

//     if(!user){
//         throw new NotFoundError("ressource introuvable","ce user n'existe pas");
//     }
//     let pass = await bcrypt.compare(password,user.password);

//     if(pass){
//         const MAXAGE = Math.floor(Date.UTCnow()/1000)+(60*60);
//         user.exp=MAXAGE;

//         token= await jwt.sign(JSON.stringify(user),"SECRET");
//         user.token = token;
//         return user;
//     }
//     else{
//         throw new UnauthorizedError("wrong password")
//     }
// },
    
    
    
//     add: async (data) => {
//      console.log(data)
//         const {name,email,password} = data;
//        const userr = await user.findOne({

//            where:{
//                email
//            }
//         });
//         if(userr){
//             throw new BadRequestError("Cet utilisateur existe déjà")
//         }
//       data.password = await getEncryptedPassword(password);
//       const newUser = await user.create(data);

//       return newUser;
//     },


// };


// module.exports = userController;


const { user } = require("../models");
const { NotFoundError, BadRequestError ,UnauthorizedError} = require ("../helpers/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getEncryptedPassword(password) {

 

  let encryptedPassword =await bcrypt.hash(password,10)

    return encryptedPassword;
}

const userController = {
 

  getOne: async (id) => {
    const User = await user.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},

    });
    if (!User) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    return User;
  },

   getByName: async (name,password) => {
    const User = await user.findOne({
      where: {
        name
      },
      attributes: {exclude: ["dateCreated"]},

    });
    if (!User) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    let correct =await bcrypt.compare(password, User.password);
        if(correct){

        const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour of expiration
        User.exp=MAXAGE;
        token= await jwt.sign(JSON.stringify(User),"SECRET"); //sale mon token
        User.token=token; //recupere le token qui estt dans user
          return User;

        }
        else{
          throw new UnauthorizedError("Wrong Password");
        }

  },

  add: async (data) => {
    const {email,password} = data;

    const User = await user.findOne({
      where: {
         email
      }
    });

    if (User) {
      throw new BadRequestError("Ressource existante", "Ce User existe déjà");
    }
    data.password=await getEncryptedPassword(password);

    console.log(data.password);
    const newUser = await user.create(data);

    return newUser;
  },



};

module.exports = userController;

