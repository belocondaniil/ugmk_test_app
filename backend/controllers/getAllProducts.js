const { client } = require('../redis/index');
const { productFilterKeys } = require('../dictionary/productFilterKeys');
const { getFilteredArray } = require('../utils/getFilteredArray');

async function getAllProducts(req, res) {
  try {
    const requiredProduct = req.params.product;
    const fabricsProductsString = await client.get('fabrics_products');
    const fabricsProducts = JSON.parse(fabricsProductsString)
    console.log(requiredProduct)


    if (!requiredProduct || requiredProduct === productFilterKeys.all) {
      return res.send({
      success: true,
      data: fabricsProducts
    });
  }

    const filteredData = fabricsProducts.map(({ data, ...info }) => ({
      ...info,
      data: getFilteredArray(data, requiredProduct),
    }));

    return res.send({
      success: true,
      data: filteredData
    });
  } catch(err) {
    console.log(err);
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
