const Order  = require('../modals/orderModel')
const Product =  require('../modals/productModal')

const catchErr = require('../Middelware/asyncMiddelware');
const ErrorHandler = require('../Utils/errorHandler/errorHandle');
const { findById } = require('../modals/orderModel');


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


//GET SINGLE ORDER

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

//ALL OUR ORDERS

exports.myOrders= catchErr(async(req,res,next)=>{


    const order = await Order.find({user:req.user._id})
    // .populate('user','name,email')    Product Schema problem
   


    res.status(200).json({
        success:true,
        message:"order sent",
        order
    })
 
})

//ADMIN ORDER
exports.allOrder= catchErr(async(req,res,next)=>{
    console.log(10);

    const order = await Order.find()

 let totalPrice =0;

 order.forEach((price)=>{
     totalPrice += price.totalPrice
 })


    res.status(200).json({
        success:true,
        message:"order sent",
        totalPrice,
        order
    })
  
})





exports.updateOrder = catchErr(async(req,res,next)=>{
const order = await Order.findById(req.params.id)
console.log(1);
if(order.orderStatus==="Delevired"){
    console.log(2);
    res.status(400).json({
        succcess:false,
        message:"Orderd alredy Deliverd"
    })
}
console.log(3);
order.orderItems.forEach(async (order)=>{
 await  updateStock (order.product,order.quantity)
})

order.orderStatus = req.body.Status

if(req.body.Status === "Delevired"){
    order.deliveredAt = Date.now()
}

await order.save({validateBeforeSave:false})
res.status(200).json({
    success:"true",

});

async function updateStock(id,quantity){

 const product =    await Product.findById(id)
 
 product.stock -= quantity;

 await product.save()




}
})


exports.deleteOrder = catchErr(async(req,res,next)=>{
    const order = await Order.findById(req.params.id)

    if(!order){
        res.status(400).json({
            success:false,
            message:"order not found"
        })
    }

    await order.remove()
    res.status(200).json({
        success:true
    })
})