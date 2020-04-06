const redis = require('redis');
// 1 configure our redis
const redisClient = redis.createClient({
    port: 6379,
    host: 'localhost'
});

module.exports = redisClient;