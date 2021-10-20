const Order  = require('../modals/orderModel')
const product =  require('../modals/productModal')

const catchErr = require('../Middelware/asyncMiddelware');
const ErrorHandler = require('../Utils/errorHandler/errorHandle');


exports.newOrder = catchErr(async(req,res,next)=>{
    console.log(1);
    const {shippingInfo,orderItems,paymentinfo,itemPrice,TaxPrice,shippingPrice,totalPrice} = req.body;
    console.log(1);
    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentinfo,
        itemPrice,
        TaxPrice,
        shippingPrice,
        totalPrice,
        paidAt:Date.now(),
        user:req.user._id,
    })
    console.log(1);

    res.status(201).json({
        
        success:true,
        message:"Order taken",
        order
    })
    console.log(1);
})
