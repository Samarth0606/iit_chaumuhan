const mongoose = require('mongoose'); 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    img: String,
    description: String
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;