
const express = require('express')
const cookieParser = require('cookie-parser')
const router = require('./routes/productRoutes.js');
const userRouter = require('./routes/UserRoutes')
const Order = require('./routes/orderroutes')
const errMiddelware = require('./Middelware/Middelware')
const app = express()

app.use(express.json())

app.use(cookieParser())

const product = router;
const user = userRouter
const order = Order

app.use('/api/v1',product)

app.use('/api/v1',user)
app.use('/api/v1',order)


app.use(errMiddelware)



module.exports = app;