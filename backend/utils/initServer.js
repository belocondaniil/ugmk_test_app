const redis = require('redis');
const client = redis.createClient({
  host:'127.0.0.1',
  port:6379
})
const { fabricKeys } = require('../dictionary/fabricKeys');

async function initServer(data) {
  await client.connect();

  const fabricsProducts = fabricKeys.map(({ id }) => data[id]);
  await client.set('fabricsProducts', JSON.stringify(fabricsProducts));
};

module.exports = { initServer };
