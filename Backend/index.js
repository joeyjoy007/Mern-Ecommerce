require('dotenv').config()
const app = require('./App')
const port = process.env.PORT || 3000;
const connection = require('./Database/Conn')


connection()

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})