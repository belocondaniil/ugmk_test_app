const { fabricKeys } = require('../dictionary/fabricKeys');
const { monthKeys } = require('../dictionary/monthKeys');

async function getProductsByMonth(req, res) {
  const { month, fabric } = req.params.month

  const fabricsProducts = await client.get('fabrics_products');

  const data = fabricKeys.map((id, label) => ({
    label,
    data: fabricsProducts[id].data[monthKeys[month]]
  })
  )

  res.send(data)
};

module.exports = {
  getProductsByMonth
};
