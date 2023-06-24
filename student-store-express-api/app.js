const express = require('express')
const app = express()
const cors = require('cors')
const productRoutes = require("./routes/products")

app.use(cors())
app.use(express.json())
app.use('/', productRoutes)

module.exports = app