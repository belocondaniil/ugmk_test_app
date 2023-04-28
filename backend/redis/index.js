const redis = require('redis');

let client;

(async () => {
  client = redis.createClient({
    url: 'redis://redis:6379',
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  });

  await client.connect();
})()

module.exports = { client };