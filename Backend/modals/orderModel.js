const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    shipping: {
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
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"product",
        required:true
    }
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
        default:true,
           required:true
    },
   TaxPrice:{
        type:Number,
        default:true,
           required:true
    },
    shippingPrice:{
        type:Date,
        default:true,
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
      required:true
  },
  createdAt:{
      type:Date,
      default:Date.now()
  }



})

const OrderModel = mongoose.model("OrderModel",orderSchema)

module.exports = OrderModel;