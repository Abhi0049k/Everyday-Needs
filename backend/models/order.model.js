const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    qty: {
        type: Number,
        min: 1,
        max: 6,
        default: 1
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'placed',
        enum: ['placed', 'booked', 'delivered']
    }
})

const orderModel = mongoose.model('order', orderSchema);

module.exports = orderModel;
