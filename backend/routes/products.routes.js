const { Router } = require('express');
const { allProducts, product, category } = require('../controllers/product.controllers');


const productRouter = Router();

productRouter.get('/all', allProducts)

productRouter.get('/:id', product)

productRouter.get('/:category', category)

module.exports = productRouter;