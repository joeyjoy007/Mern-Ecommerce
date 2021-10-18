const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

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
        recentPasswordToken:String,
    recentPasswordExpire:Date
    
})

userSchema.pre("save",async function(next){
if(!this.isModified("password")){
    next()

}

    this.password = await bcrypt.hash(this.password,10)
})

const UserModel = mongoose.model("UserModel",userSchema)

module.exports = UserModel