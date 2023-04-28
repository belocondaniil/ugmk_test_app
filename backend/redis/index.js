const redis = require('redis');

let client;

(async () => {
  client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  });

  await client.connect();
})()

module.exports = { client };