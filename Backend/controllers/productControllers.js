const Product = require('../modals/productModal')


exports.addProduct = async (req,res)=>{

const addProduct = await Product.create(req.body);

    res.status(201).json({success:true,addProduct})
}


exports.getAllProducts = async (req,res)=>{
    const products = await Product.find()

    res.status(200).json({message:"Route is Working",products})
    
}

exports.updateProduct = async (req,res,next)=>{
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


}



exports.deleteProduct = async (req,res,next)=>{
    let products = await Product.findById(req.params.id)
    if(!products){
       return  res.statud(500).json({
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


}