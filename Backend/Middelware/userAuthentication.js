const catchError = require('../Middelware/asyncMiddelware');
const ErrorHandler = require('../Utils/errorHandler/errorHandle');
const User = require('../modals/UserModel')
const jwt = require('jsonwebtoken')

exports.authToken =  catchError(async(req,res,next)=>{
 console.log(1);
    const token = req.cookies.jwtToken;
  
        if(!token){
          
            next(new ErrorHandler("User not allowed",401))
        }

        const decode = jwt.verify(token,process.env.SECRET_CODE)
     

        const user = await User.findById(decode.id)
   
  
        req.user = user;
        next()

})

exports.authorizedRoles = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){

           next(new ErrorHandler(`role:${req.user.role} is not allowed`))
        }
        next();
    }
}