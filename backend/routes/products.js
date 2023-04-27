const express = require('express');

const { getAllProducts } = require('../controllers/getAllProducts')
const { getProductsByMonth } = require('../controllers/getAllProducts')

const productRouter = express.Router();

productRouter.get('/:product', getAllProducts);
productRouter.get('/:month', getProductsByMonth);

module.exports = { productRouter };