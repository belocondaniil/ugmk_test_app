const { client } = require('../redis/index');
const { monthKeys } = require('../dictionary/monthKeys');

async function getProductsByMonth(req, res) {
  try {
  const { monthId, fabricId } = req.params

  const fabricsProductsString = await client.get('fabrics_products');
  const fabricsProducts = JSON.parse(fabricsProductsString)

  const data = {
    label: fabricsProducts[`${fabricId}`].label,
    data: fabricsProducts[`${fabricId}`].data[`${monthId}`]
  };

  res.status(200).send({
    status: 200,
    data,
  })
} catch(error) {
  console.log(error)
  res.status(500).send({
    status: 500,
  })
}
};

module.exports = {
  getProductsByMonth
};
