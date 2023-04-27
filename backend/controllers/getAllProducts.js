const { client } = require('../redis/index');
const { productFilterKeys } = require('../dictionary/productFilterKeys');
const { getFilteredArray } = require('../utils/getFilteredArray');

async function getAllProducts(req, res) {
  await client.connect();

  try {
    const requiredProduct = req.params.id;
    if (!requiredProduct || requiredProduct === productFilterKeys.all) return res.send(data);

    const fabricsProducts = await client.get('fabrics_products');
    const filteredData = fabricsProducts.map(({ data, ...info }) => ({
      ...info,
      data: getFilteredArray(data),
    }));

    return res.send(filteredData);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  getAllProducts
};
