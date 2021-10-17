const express = require('express')

const router = require('./routes/productRoutes.js');
const errMiddelware = require('./Middelware/Middelware')
const app = express()

app.use(express.json())

const product = router;

app.use('/api/v1',product)
app.use(errMiddelware)




module.exports = app;