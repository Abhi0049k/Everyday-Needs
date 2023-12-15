const { Router } = require('express');
const { userOrders, bookedOrders, deleteOrder, checkoutOrder, increQty, decreQty, placeOrder, createPayment } = require('../controllers/order.controllers');


const orderRouter = Router();

orderRouter.get('/', userOrders)

orderRouter.get('/bookedOrders', bookedOrders)

orderRouter.delete('/:id', deleteOrder)

orderRouter.patch('/checkout', checkoutOrder)

orderRouter.patch('/increQty/:id', increQty)

orderRouter.patch('/decreQty/:id', decreQty)

orderRouter.post('/placeOrder', placeOrder)

orderRouter.post('/createPayment', createPayment)

module.exports = orderRouter;