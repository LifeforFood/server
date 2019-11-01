const Route = require('express').Router();
const userRoute = require('./userRoute');
const zomatoRoute = require('./zomatoRoute')
const directionRoute = require('./directionRoute')
const favRoute = require('./favRoute');
const yesNoRoute = require('./yesNoRoute')

Route.use('/', userRoute);
Route.use('/directions', directionRoute)
Route.use('/zomato', zomatoRoute)
Route.use('/fav', favRoute);
Route.use('/yesno', yesNoRoute)

module.exports = Route;