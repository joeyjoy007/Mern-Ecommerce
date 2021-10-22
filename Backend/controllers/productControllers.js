const Product = require('../modals/productModal')

const catchErr = require('../Middelware/asyncMiddelware');
const ErrorHandler = require('../Utils/errorHandler/errorHandle');
const AppFeature = require('../Utils/Search/Search');
const sendCookie = require('../Utils/jwtCookie/UserCookie');


exports.addProduct = catchErr(async (req,res)=>{
console.log(9);
    req.body.user = req.user.id ;
    console.log(9);
    const addProduct = await Product.create(req.body);
    console.log(9);
        res.status(201).json({success:true,addProduct})
        console.log(9);
    })


exports.getAllProducts = catchErr(async (req,res)=>{

    
   
const resultPerPage = 5;
const countProduct = await Product.countDocuments();
    const appfeature = new AppFeature(Product.find(),req.query).search().filter().pagination(resultPerPage)
    const products = await appfeature.query

    res.status(200).json({message:"Route is Working",products,countProduct})
  
})

exports.updateProduct =catchErr( async (req,res,next)=>{
    let products = await Product.findById(req.params.id)
    if(!products){
       return  res.status(500).json({
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



exports.productReviews = catchErr(async(req,res,next)=>{
const {rating,comments,productId} = req.body
    const review = {
       user:req.user._id,
        name:req.user._id,
        rating :Number(rating),
        comments:comments
    };

    const product = await Product.findById(productId)

    const isReviewed =  product.reviews.find(element=>element.user.toString()===req.user._id.toString())

    if(isReviewed){
product.reviews.forEach(element=>{
    if(product.reviews.find(element=>element.user.toString()===req.user._id.toString())){
    element.rating = rating,
    element.comments = comments
    }
    
})

    }
    else{
            product.reviews.push(review)
            product.noOfReviews = product.reviews.length
    }



var avg = 0;

product.reviews.forEach((element)=>{
   
    avg = avg + element.rating
   
})

product.rating =  avg / product.reviews.length

await product.save()
;

res.status(200).json({
    success:true,
    message:"reviewed"
})

})


exports.getTotalReviews = catchErr(async(req,res,next)=>{
    const product = await Product.findById(req.query.id)

    if(! product){
      
        res.status(404).json({
            success:false,
            message:"review not foundd"
        })
    }
   
    res.status(200).json({
       
        success:true,
        message:"review found",
       reviews: product.reviews
    })


})

exports.deleteReview = catchErr(async(req,res,next)=>{
  
    const product = await Product.findById(req.query.productId)

    if(!product){
       
        res.status(401).json({
            success:false,
            message:"product not found"
        })
    }

    const reviews = product.reviews.filter(element=>element._id.toString() !== req.query.id.toString())  //saare reviw mil jaaenge 
    console.log(4);

    var avg = 0;

reviews.forEach((element)=>{
   
    avg = avg + element.rating
   
})


const rating =  avg / reviews.length
const noOfReviews = reviews.length

await Product.findByIdAndUpdate(req.query.productId,{reviews,rating,noOfReviews},{
    new:true,runValidators:true,useFindAndModify:false
})
console.log(7);

await product.save()
;

res.status(200).json({
    success:true,
    message:"reviewed"
})

})