const { client } = require('../redis/index');
const { fabricKeys } = require('../dictionary/fabricKeys');

async function initServer(data) {
  const fabricsProducts = fabricKeys.map(({ id }) => data[id]);
  await client.set('fabricsProducts', JSON.stringify(fabricsProducts));
};

module.exports = { initServer };
