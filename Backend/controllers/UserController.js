const CatchErr = require('../Middelware/asyncMiddelware')
const User = require('../modals/UserModel')
const ErrorHandler = require('../Utils/errorHandler/errorHandle')
const sendCookie = require('../Utils/jwtCookie/UserCookie')
const sendEmail = require('../Utils/nodemailer/nodemailer')

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




exports.logoutUser = CatchErr(async(req,res,next)=>{
    res.clearCookie('jwtToken')

    res.status(200).json({
        success:true,
        message:"User has been logged out"
    })
})

exports.forgotPassword = CatchErr(async(req,res,next)=>{
console.log("1nn");
    const user = await User.findOne({email:req.body.email})
    console.log("2nn");

    if(!user){
        console.log("1n");
        return next(new ErrorHandler("account not exist",500))
    }

    //Get Reset Password Token
console.log("3nn");
    const resetPassword = user.getResetPasswordToken()
    console.log("4nn")

    await user.save({validateBeforeSave:false})

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset?${resetPassword}`

    const message = `Password Recovery link \n\n ${resetPasswordUrl} if u not requested it then ignore it`;
    console.log("5n");

    try {

        console.log("6n");


            await sendEmail({
            
                email:user.email,
                subject:"Password Recovery",
                message:message
            });
console.log("7n");
            res.status(200).json({
                success:true,

                message:"Email sent successfully"
            })

        
    } catch (error) {
        console.log("2n");
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        console.log(3n);
       await user.save({validateBeforeSave:false})
       console.log(4n);
    return next(new ErrorHandler("error occured",401))
  
    }
    
})