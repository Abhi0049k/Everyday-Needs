const {Router} = require('express');
const productModel = require('../models/product.model');

const productRouter = Router();

productRouter.get('/all', async(req, res)=>{
    try{
        const list = await productModel.find(req.query);
        res.status(200).send(list);
    }catch(err){
        res.status(500).send({msg: err.message});
    }
})

productRouter.get('/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const list = await productModel.findById(id);
        res.status(200).send(list);
    }catch(err){
        res.status(500).send({msg: err.message});
    }
})

productRouter.get('/:category', async(req, res)=>{
    try{
        const {category} = req.params;
        const list = await productModel.find({category: category});
        res.status(200).send(list);
    }catch(err){
        res.status(500).send({msg: err.message});
    }
})

module.exports = productRouter;