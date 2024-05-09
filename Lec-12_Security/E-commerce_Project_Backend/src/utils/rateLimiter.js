// import { rateLimit } from 'express-rate-limit';

const { rateLimit } = require('express-rate-limit');

const rateLimiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 2 minutes
	max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'Too many requets from this IP, Please try again after 2 mins'
});

console.log(rateLimiter)

module.exports = rateLimiter;