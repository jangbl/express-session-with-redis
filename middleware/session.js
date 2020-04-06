const session = require('express-session');
const connectRedis = require('connect-redis');
const redisClient = require('../db/redis');

const RedisStore = connectRedis(session);

module.exports = session({
    store: new RedisStore({client: redisClient}),
    secret: 'mySecret',
    saveUninitialized: false,
    resave: false, 
    name: 'sessionId',
    cookie: {
        secure: false, // if true: only transmit cookie over https, in prod, always activate this
        httpOnly: true, // if true: prevents client side JS from reading the cookie
        maxAge: 1000 * 60 * 30 // session max age in milliseconds
    }
});