require('dotenv').config()
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        maxlength:[30,"you can enter more than 30 characters"],
        minlength:[4,"you cant enter less than 4 character"]
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"Please enter correct email"]
    },
    password:{
        type:String,
        required:[true,"enter your password"],
        minlength:[8,"password shoul be 8 character or more"],
        select:false

    },
    avtar:
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            },
        },
        role:{
            type:String,
            default:"user"
        },
        resetPasswordToken:String,
    resettPasswordExpire:Date
    
})



//JwT



userSchema.methods.generateToken = function(){
  
   const token =  jwt.sign({id:this._id},process.env.SECRET_CODE,{
       expiresIn:process.env.EXPIRY
   })
   return token
    
}



userSchema.methods.comparePassword = async function(password){

    const match = await bcrypt.compare(password,this.password);

    if(!match){
        console.log("Not matched");
        
    }

    else{
        console.log("ghotalka");
        return match
    }

    
}


// bcrypt
userSchema.pre("save",async function(next){
if(!this.isModified("password")){
    next()

}


    this.password = await bcrypt.hash(this.password,10)
})


userSchema.methods.getResetPasswordToken = function(){

    const resetToken = crypto.randomBytes(20).toString("hex")

   this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

   this.resettPasswordExpire = Date.now()+15*60*1000

    return resetToken;

    

}

const UserModel = mongoose.model("UserModel",userSchema)

module.exports = UserModel