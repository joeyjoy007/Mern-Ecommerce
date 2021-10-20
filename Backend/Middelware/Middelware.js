const ErrorHandler = require('../Utils/errorHandler/errorHandle')


 module.exports= (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error"

    if(err.code === 11000){
        message:"Use other email"
    }
    if(err.name === "JsonWebTokenError"){
        message:"Error in Token"
    }
    if(err.name === "TokenExpiredError"){
        message:"token is expired"
    }

    res.status(err.statusCode).json({
        message:"Failed to catch ",
        success:false,
        error:err.message
    })
}


