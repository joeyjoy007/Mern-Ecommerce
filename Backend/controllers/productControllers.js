const Product = require('../modals/productModal')

const catchErr = require('../Middelware/asyncMiddelware');
const ErrorHandler = require('../errorHandler/errorHandle');
const AppFeature = require('../Search/Search')
exports.addProduct = catchErr(async (req,res)=>{

    const addProduct = await Product.create(req.body);
    
        res.status(201).json({success:true,addProduct})
    })


exports.getAllProducts = catchErr(async (req,res)=>{
const resultPerPage = 5;
    const appfeature = new AppFeature(Product.find(),req.query).search().filter().pagination(resultPerPage)
    const products = await appfeature.query

    res.status(200).json({message:"Route is Working",products})
    
})

exports.updateProduct =catchErr( async (req,res,next)=>{
    let products = await Product.findById(req.params.id)
    if(!products){
       return  res.statud(500).json({
            failed:"Item not found",
            success:false,
        })
    }

    products = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        
    });
    res.json({
        success:true,
        message:"Item Updated",
        products
    })


})



exports.deleteProduct = catchErr(async (req,res,next)=>{
    let products = await Product.findById(req.params.id)

    if(!products){
       return  res.status(500).json({
            failed:"Item not found",
            success:false,
        })
    }

    products = await Product.findByIdAndDelete(req.params.id);
    res.json({
        success:true,
        message:"Item Deleted",
        products
    })



})


exports.getProductDetail =catchErr( async (req,res,next)=>{



    let products = await Product.findById(req.params.id)
    if(!products){
     return next(new ErrorHandler("Product not found",404))
    }

    res.status(200).json({
        success:true,
        
        products
    })


})