const { client } = require('../redis/index');
const { productFilterKeys } = require('../dictionary/productFilterKeys');
const { getFilteredArray } = require('../utils/getFilteredArray');

async function getAllProducts(req, res) {
  try {
    const { product = productFilterKeys.all } = req.params;
    const fabricsProductsString = await client.get('fabrics_products');
    const fabricsProducts = JSON.parse(fabricsProductsString)

    const filteredData = fabricsProducts.map(({ data, ...info }) => ({
      ...info,
      data: getFilteredArray(data, product),
    }));

    console.log('%c%s', 'color:#DFA', '>>> filteredData: ', filteredData)

    return res.send({
      success: true,
      data: filteredData
    });
  } catch(err) {
    res
    .status(500)
    .send({
      status: 500,
      success: false,
      message: 'INTERNAL_ERROR'
    });
  }
}

module.exports = {
  getAllProducts
};
