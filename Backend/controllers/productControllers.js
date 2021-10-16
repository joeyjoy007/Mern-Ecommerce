const Product = require('../modals/productModal')


exports.addProduct = async (req,res)=>{

const addProduct = await Product.create(req.body);

    res.status(201).json({success:true,addProduct})
}


exports.getAllProducts = async (req,res)=>{
    const products = await Product.find()

    res.status(200).json({message:"Route is Working",products})
    
}