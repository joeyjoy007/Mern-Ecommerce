const CatchErr = require('../Middelware/asyncMiddelware')
const User = require('../modals/UserModel')
const ErrorHandler = require('../Utils/errorHandler/errorHandle')
const sendCookie = require('../Utils/jwtCookie/UserCookie')
const sendEmail = require('../Utils/nodemailer/nodemailer')
const crypto = require('crypto')

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
       res.status(401).json({
           success:false,
           message:"invalid cedentials1"
       })
     
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){
     console.log("Not user");
        res.status(401).json({
            success:false,
            message:"invalid cedentials 2"
        })
      
    }

    const matchPassword =await user.comparePassword(password);

    if(!matchPassword){
        console.log("not match")
       
     return   res.status(401).json({
            success:false,
            message:"password not compared"
        })
    }
   console.log("Ghotala2");

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

    const user = await User.findOne({email:req.body.email})
  

    if(!user){
       
        return next(new ErrorHandler("account not exist",500))
    }

    //Get Reset Password Token

    const resetPassword = user.getResetPasswordToken()


    await user.save({validateBeforeSave:false})

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset?${resetPassword}`

    const message = `Password Recovery link \n\n ${resetPasswordUrl} if u not requested it then ignore it`;
  

    try {

      


            await sendEmail({
            
                email:user.email,
                subject:"Password Recovery",
                message:message
            });

            res.status(200).json({
                success:true,

                message:"Email sent successfully"
            })

        
    } catch (error) {
     
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
    
       await user.save({validateBeforeSave:false})
  
    return next(new ErrorHandler("error occured",401))
  
    }
    
})


exports.resetPassword = async(req,res,next)=>{
    console.log(1);

    try {

        const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

        const user = await User.findOne({resetPasswordToken,resetPasswordExpire:{$gt:Date.now()}})
    
        if(!user){
            console.log(2);
            res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
    
        if(req.body.password !== req.body.cPassword){
            console.log(3);
            res.status(400).json({
                success:false,
                message:"passwords do not match"
            })
        }
    console.log(4);
        user.password = req.body.password;
          
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        console.log(5);
    
        await user.save();
        sendCookie(user,200,res)
        console.log(6);
        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Password not changed"
        })
    }
 
   


}


exports.getUserDetail = CatchErr(async(req,res,next)=>{
    const user = await User.findById(req.user.id)
console.log(1);
    if(user){
        console.log(2);
     return    res.status(200).json({
            success:true,
            message:"User detail is",
            user,
        })
      
    }
    console.log(3);
    return res.status(401).json({
        succes:false,
        message:"User is not available"
    })
  
})

exports.updatePassword = CatchErr(async(req,res,next)=>{
    console.log(11);

    const user = await User.findById(req.user.id).select("+password")
    console.log(12);

    console.log(req.body.oldPassword);
    console.log(13);

  

    const matchPassword = await user.comparePassword(req.body.oldPassword);
    console.log(15)

    if(!matchPassword){
        console.log(16)
        res.status(401).json({
            success:false,
            message:"Old password is incorrect"
        });
    };
    console.log(17)

    if(req.body.newPassword !== req.body.cPassword){
        console.log(18)
        res.status(401).json({
            success:false,
            message:"Password are not equal"
        });
    };
    console.log(19)
   user.password = req.body.newPassword;
    console.log(20)

    await user.save()
    console.log(21)

    sendCookie(user,200,res)



})