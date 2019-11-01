const Route = require('express').Router();
const userRoute = require('./userRoute');
const zomatoRoute = require('./zomatoRoute')
const directionRoute = require('./directionRoute')
const favRoute = require('./favRoute');

Route.use('/', userRoute);
Route.use('/directions', directionRoute)
Route.use('/zomato', zomatoRoute)
Route.use('/fav', favRoute);

module.exports = Route;