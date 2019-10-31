const Route = require('express').Router();
const userRoute = require('./userRoute');
const zomatoRoute = require('./zomatoRoute')
const directionRoute = require('./directionRoute')

Route.use('/', userRoute);
Route.use('/directions', directionRoute)
Route.use('/zomato', zomatoRoute)

module.exports = Route;