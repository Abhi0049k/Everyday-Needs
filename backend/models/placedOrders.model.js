const mongoose = require('mongoose');

const placedOrder = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }, 
    totalDiscount: {
        type: Number,
        required: true
    },
    products: [
        {
            qty: {
                type: Number,
            },
            productId: {
                type: mongoose.Schema.Types.ObjectId,
            }
        }
    ],
    paymentSummary:{
        type: String
    }
},{
    versionKey: false
})

const orderSummary = mongoose.model('OrderSummary', placedOrder);

module.exports = orderSummary;