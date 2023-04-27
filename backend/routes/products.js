const express = require('express');

const { getAllProducts } = require('../controllers/getAllProducts')

const productRouter = express.Router();

productRouter.get('/:product', getAllProducts);

module.exports = { productRouter };