const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    shippingInfo: {
        address: { type: String,
             required: true },

        city: { type: String,
             required: true },

        state: { type: String,
             required: true },

        country: { type: String,
             required: true },

        pincode: {
            type: Number,
            required: true
        },

        phoneNumber: {
            type: Number,
            required: true
        }
    },
    orderItems:[{
       product:{
           type:mongoose.Schema.ObjectId,
           ref:"Product",
           required:true
       },
    name:{
        type:String,
        required:true 
    },
   price:{
        type:Number,
        required:true 
    },
   quantity:{
        type:String,
        required:true 
    },
    image:{
        type:String,
        required:true
    },
  
    }],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"product",
        required:true
    },
    paymentinfo:{
        id:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        }
    },
    paidAt:{
        type:Date,
        required:true
    },
    itemPrice:{
        type:Number,
        default:0,
           required:true
    },
   TaxPrice:{
        type:Number,
        default:0,
           required:true
    },
    shippingPrice:{
        type:Date,
        default:0,
           required:true
    },
   totalPrice:{
        type:Number,
        default:true,
        required:true

    },
  orderStatus:{
      type:String,
      required:true,
      default:"processing"
  },
  deliveredAt:{
      type:Date,
      required:true,
      default:Date.now()
  },
  createdAt:{
      type:Date,
      default:Date.now()
  },
  stock:{
      type:Number,
      default:1,
      required:true
  }



})

const Order = mongoose.model("Order",orderSchema)

module.exports = Order;