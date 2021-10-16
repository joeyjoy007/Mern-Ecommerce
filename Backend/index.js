const app = require('./App')
const port = process.env.PORT || 3000;
require('dotenv').config()

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})