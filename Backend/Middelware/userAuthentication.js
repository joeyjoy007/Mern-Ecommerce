const catchError = require('../Middelware/asyncMiddelware');
const ErrorHandler = require('../Utils/errorHandler/errorHandle');
const User = require('../modals/UserModel')
const jwt = require('jsonwebtoken')

exports.authToken =  catchError(async(req,res,next)=>{
 console.log(1);
    const token = req.cookies.jwtToken;
  
        if(!token){
          console.log(2);
            next(new ErrorHandler("User not allowed",401))
        }
console.log(3);
        const decode = jwt.verify(token,process.env.SECRET_CODE)
     console.log(4);

        const user = await User.findById(decode.id)
   console.log(5);
  
        req.user = user;
        next()

})

exports.authorizedRoles = (...roles)=>{
    return (req,res,next)=>{
        console.log(6);
        if(roles.includes(req.user.role)){
            console.log(7);

       return    next(new ErrorHandler(`role:${req.user.role} is not allowed`,403))
        }
        console.log(8);
        next();
    }
}
