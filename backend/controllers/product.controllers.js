const productModel = require('../models/product.model');

const allProducts = async (req, res) => {
    try {
        const list = await productModel.find(req.query);
        res.status(200).send(list);
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

const product = async (req, res) => {
    try {
        const { id } = req.params;
        const list = await productModel.findById(id);
        res.status(200).send(list);
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

const category = async (req, res) => {
    try {
        const { category } = req.params;
        const list = await productModel.find({ category: category });
        res.status(200).send(list);
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

module.exports = {
    allProducts, product, category
}