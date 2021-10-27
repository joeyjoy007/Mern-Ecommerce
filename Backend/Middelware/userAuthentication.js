const catchError = require('./asyncMiddelware');
const ErrorHandler = require('../Utils/errorHandler/errorHandle');
const User = require('../modals/UserModel')
const jwt = require('jsonwebtoken');
const sendCookie = require('../Utils/jwtCookie/UserCookie');

exports.authToken =  catchError(async(req,res,next)=>{

    const token = req.cookies.jwtToken;
  
        if(!token){
            console.log("not token");
    
            res.status(401).json({
                success:false,
                message:"token not provided"
            })
        }

        const decode = jwt.verify(token,process.env.SECRET_CODE)


        const user = await User.findById(decode.id)

  
        req.user = user;
 
        next()

})

exports.authorizedRoles = (...roles)=>{
    return (req,res,next)=>{
  
        console.log(req.user.role);
        if(!roles.includes(req.user.role)){

           

       return   res.status(401).json({
        success:false,
        message:"role not decided"
    })
        }
        console.log(9);
        next();
     
    }
}


