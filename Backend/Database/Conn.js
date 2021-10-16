const mongoose = require('mongoose')



const connection = ()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("DataBase is connected Successfully");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connection