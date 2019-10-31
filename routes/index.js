const Route = require('express').Router();
const userRoute = require('./userRoute');
const zomatoRoute = require('./zomatoRoute')

Route.use('/', userRoute);

Route.use('/zomato', zomatoRoute)

module.exports = Route;