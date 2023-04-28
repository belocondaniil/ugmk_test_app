const { client } = require('../redis/index');
const { monthKeys } = require('../dictionary/monthKeys');

async function getProductsByMonth(req, res) {
  try {
  const { month, fabricId } = req.params

  const fabricsProductsString = await client.get('fabrics_products');
  const fabricsProducts = JSON.parse(fabricsProductsString)

  const data = {
    label: fabricsProducts[`${fabricId}`].label,
    data: fabricsProducts[`${fabricId}`].data[monthKeys[month]]
  };

  res.status(200).send({
    status: 200,
    data,
  })
} catch(error) {
  res.status(500).send({
    status: 500,
  })
}
};

module.exports = {
  getProductsByMonth
};
