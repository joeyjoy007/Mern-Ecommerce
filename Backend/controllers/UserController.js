const CatchErr = require('../Middelware/asyncMiddelware')
const User = require('../modals/UserModel')
const ErrorHandler = require('../Utils/errorHandler/errorHandle')
const sendCookie = require('../Utils/jwtCookie/UserCookie')

exports.registerUser = CatchErr(async(req,res,next)=>{
    const {name,email,password} = req.body


    const user = await User.create({
        name,email,password,avtar:{
            public_id:"Public id",
            url:"url"
        }
    })
    
    sendCookie(user,201,res) // function in utils
})


exports.loginUser = CatchErr(async(req,res,next)=>{
    const {email,password} = req.body

    if(!email || !password){
       return  next(new ErrorHandler("Please enter email or password",401))
     
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){
     
        return next(new ErrorHandler("Invalid email or password",401))
    }

    const matchPassword = user.comparePassword(password);

    if(!matchPassword){
       
        return next(new ErrorHandler("Credential invalid",401))
    }


    sendCookie(user,201,res) // function inutils
})

