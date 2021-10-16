const Product = require('../modals/productModal')


exports.addProduct = async (req,res)=>{
    console.log(req.body);
const addProduct = await Product.create(req.body);

    res.status(201).json({success:true,addProduct})
}


exports.getAllProducts = (req,res)=>{
    res.status(200).json({message:"Route is Working"})
}