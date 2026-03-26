const { readProduct, createProduct } = require("../controllers/product.controller");



function productRoutes(app){
    // READ
    app.get('/api/products' , readProduct)
    // CREATE
    app.post('/api/product' , createProduct)
}

module.exports = productRoutes;