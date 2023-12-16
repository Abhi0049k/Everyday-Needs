const { Router } = require('express');
const { userOrders, bookedOrders, deleteOrder, checkoutOrder, increQty, decreQty, placeOrder, createPayment, completeCheckout } = require('../controllers/order.controllers');


const orderRouter = Router();

orderRouter.get('/', userOrders)

orderRouter.get('/bookedOrders', bookedOrders)

orderRouter.delete('/:id', deleteOrder)

orderRouter.patch('/checkout', checkoutOrder)

orderRouter.patch('/increQty/:id', increQty)

orderRouter.patch('/decreQty/:id', decreQty)

orderRouter.post('/placeOrder', placeOrder)

orderRouter.post('/createPayment', createPayment)

orderRouter.patch('/completeCheckout/:id', completeCheckout)

module.exports = orderRouter;