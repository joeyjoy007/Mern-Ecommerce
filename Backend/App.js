
const express = require('express')
const cookieParser = require('cookie-parser')
const router = require('./routes/productRoutes.js');
const userRouter = require('./routes/UserRoutes')
const errMiddelware = require('./Middelware/Middelware')
const app = express()

app.use(express.json())

app.use(cookieParser())

const product = router;
const user = userRouter

app.use('/api/v1',product)

app.use('/api/v1',user)


app.use(errMiddelware)



module.exports = app;