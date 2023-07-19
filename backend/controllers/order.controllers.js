const orderModel = require('../models/order.model');
const productModel = require('../models/product.model');

const userOrders = async (req, res) => {
    try {
        const { cusId } = req.body;
        const list = await orderModel.find({ userId: cusId, status: 'placed' });
        res.status(200).send(list);
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}


const bookedOrders = async (req, res) => {
    try {
        const { cusId } = req.body;
        const list = await orderModel.find({ userId: cusId, status: 'booked' });
        res.status(200).send(list);
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { cusId } = req.body;
        const { id } = req.params;
        const order = await orderModel.findById(id);
        if (order.userId != cusId)
            return res.status(400).send({ msg: 'You are not authorized to remove this order' })
        await orderModel.findByIdAndDelete(id);
        res.status(200).send({ msg: 'Order Removed' });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

const checkoutOrder = async (req, res) => {
    try {
        let { cusId } = req.body;
        await orderModel.updateMany({ userId: cusId }, { status: 'booked' })
        res.status(200).send({ msg: 'Your order is booked' })
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

const increQty = async (req, res) => {
    try {
        const { cusId } = req.body;
        const { id } = req.params;
        const order = await orderModel.findOne({ userId: cusId, _id: id });
        if (order.qty === 6)
            return res.status(400).send({ msg: 'You cannot increase the quantity anymore.' });
        await orderModel.findOneAndUpdate({ userId: cusId, _id: id }, { $set: { qty: order.qty + 1 } }, { new: true })
        res.status(200).send({ msg: 'Quantity Increased' });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

const decreQty = async (req, res) => {
    try {
        const { cusId } = req.body;
        const { id } = req.params;
        const order = await orderModel.findOne({ userId: cusId, _id: id });
        if (order.qty === 1)
            return res.status(400).send({ msg: 'You cannot reduce the quantity anymore.' });
        await orderModel.findOneAndUpdate({ userId: cusId, _id: id }, { $set: { qty: order.qty - 1 } }, { new: true })
        res.status(200).send({ msg: 'Quantity Decreased' });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

const placeOrder = async (req, res) => {
    try {
        const { cusId, productId } = req.body;
        const productDetails = await productModel.findById(productId);
        if (!productDetails) return res.status(400).send({ msg: 'Product Not Found' });
        const discount = productDetails.deleteValue - productDetails.price;
        const newOrder = new orderModel({ userId: cusId, productId, img: productDetails.img[0], title: productDetails.title, price: productDetails.price, discount });
        await newOrder.save();
        res.status(200).send({ msg: 'Order placed' });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}
module.exports = {
    userOrders, bookedOrders, placeOrder, decreQty, increQty, checkoutOrder, deleteOrder
}