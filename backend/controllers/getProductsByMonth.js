async function getProductsByMonth(req, res) {
  const { month, fabric } = req.params.month

  const fabricsProducts = await client.get('fabrics_products');

  fabricsProducts[]

  res.send()
}
