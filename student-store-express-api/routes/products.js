const express = require("express")
const router = express.Router()
const userProducts = require("../models/getProducts")
//const { response } = require("../app")

//Get all products route
router.post("/", (request, response) => {
    console.log(request.body)
    const { shoppingCart, name, email}  = request.body
    console.log('purchases info IN ROUTER:', request.body)
    const newShoppingCart = userProducts.addToPurchases(shoppingCart, name, email)
    response.json(newShoppingCart)
})

router.get('/', (request, response) => {
    const products = userProducts.getProductList()
    response.json(products)
    console.log(products)
})

router.get('/products/:id', (request, response) => {
    const product = userProducts.getproduct(request.params.id)
    response.json(product)
})

router.get('/checkout', (request, response) => {
    const purchases = userProducts.getPurchases()
    response.json(purchases)
})
router.get('/checkout', (request, response) => {
    const specificPurchase = userProducts.getSpecificPurchase(request.params.id)
    response.json(specificPurchase)
})

router.get('/currentReceipt', (request, response) => {
    console.log('HELLO HELLO I WAS CALLD?')
    const lastReceipt = userProducts.getLastReceipt()
    response.json(lastReceipt)
})

router.get('/allProducts', (request, response) => {
    const allReceipts = userProducts.getAllReceipts()
    response.json(allReceipts)
})


module.exports = router
