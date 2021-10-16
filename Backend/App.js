const express = require('express')

const router = require('./routes/productRoutes.js');
const app = express()

app.use(express.json())

const product = router;

app.use('/api/v1',product)



module.exports = app;