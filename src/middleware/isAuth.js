const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../helpers/error");


const isAuth = (request,response,next)=>{  //continuer dans la navigation
    const token = request.header.authorization.split('Bearer') [1];  //recuperer le token, dans le front

    jwt.verify(token,"SECRET",(error,user)=>{ //verifier le token    

        if(error){      
            throw new UnauthorizedError("You must login"); 

        }else{
            const { exp}=user;
            if(Date.now()/1000 >= exp){   // si il est toujours valide
                Response.clearCookie("jwt");

                throw new UnauthorizedError("You must login")
            }

            request.user = user;
            next ();
        }
    })
}

module.exports = isAuth;

// index.js proteger ses route
//pi est dans le router
//quand on fait login, on verifie le mdp on creer un token et ds token:
//creer le token apres on login, on met date expiration et donnée de user
//on return un cookie,  dans le fronton fait cookie.set et garde ds le local storage 
//qd on appel api on met l'authorization dans api.js, qd token ds header et appel api, dans back end si a