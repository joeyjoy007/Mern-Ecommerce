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


//GET DSINGLE ORDER BY ADMIN

exports.getSingleOrder = catchErr(async(req,res,next)=>{

    const order = await Order.findById(req.params.id)
    // .populate('user','name,email')    Product Schema problem
  
    if(!order){
      
        res.status(401).json({
            success:false,
            message:"order not found"
        })
    }
  

    res.status(200).json({
        success:true,
        message:"order sent",
        order
    })
   
})



exports.myOrders= catchErr(async(req,res,next)=>{
    console.log(10);

    const order = await Order.find({user:req.user._id})
    // .populate('user','name,email')    Product Schema problem
    console.log(1);


    res.status(200).json({
        success:true,
        message:"order sent",
        order
    })
    console.log(24);
})