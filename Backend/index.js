require('dotenv').config()
const app = require('./App')
const port = process.env.PORT || 3000;
const connection = require('./Database/Conn')


connection()

const server = app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})

//Unhandeled promise rejection

// process.on('unhandledRejection',(err)=>{
//     console.log(`Error : ${err.message}`)
//     console.log("Shutting Servers Down");

//     server.close(()=>{
//         process.exit(1);
//     })
// })
 
