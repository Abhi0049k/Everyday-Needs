const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['backpacks', 'watchband', 'messengerbag', 'organiser', 'cases']
    },
    offer:{
        type: String
    },
    deleteValue: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    img: {
        type: [String]
    }
})


const productModel = mongoose.model('product', productSchema);

module.exports = productModel;
