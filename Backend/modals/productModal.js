const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"]
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product number"],
        maxlength:[8,"price cannot be more than 8 character"]
    },
    ratings:{
        type:Number,
     default:0
    },
    image:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        },
    }],
    category:{
        type:String,
        required:[true,"please enter product category"]
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxlength:[4,"Please enter product stock"],
        default:0
    },
    noOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comments:{
            type:String,
            required:true
        },
        

    }],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    createdAt :{
        type:Date,
        default:Date.now
    }
})


const ProductModal = mongoose.model('ProductModel',productSchema)

module.exports = ProductModal;