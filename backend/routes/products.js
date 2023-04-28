const express = require('express');

const { getAllProducts } = require('../controllers/getAllProducts')
const { getProductsByMonth } = require('../controllers/getProductsByMonth')

const productRouter = express.Router();

productRouter.get('/:product?', getAllProducts);
productRouter.get('/:month/:fabricId', getProductsByMonth);

module.exports = { productRouter };