const ErrorHandler = require('../errorHandler/errorHandle')


 module.exports= (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error"

    res.status(err.statusCode).json({
        message:"Failed to catch bhai",
        success:false,
        error:err
    })
}


