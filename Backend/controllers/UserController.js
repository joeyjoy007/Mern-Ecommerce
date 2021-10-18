const CatchErr = require('../Middelware/asyncMiddelware')
const User = require('../modals/UserModel')
exports.registerUser = CatchErr(async(req,res,next)=>{
    const {name,email,password} = req.body


    const user = await User.create({
        name,email,password,avtar:{
            public_id:"Public id",
            url:"url"
        }
    })
   

    res.status(201).json({
            success:true,
            message:"User Registered",
            user
    })
})