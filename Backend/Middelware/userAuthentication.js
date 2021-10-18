const catchError = require('../Middelware/asyncMiddelware')

const authToken =  catchError(async(req,res,next)=>{
 
    const token = req.cookies.jwtToken;
  

    console.log(token);
})
module.exports = authToken