const Route = require('express').Router();
const zomatoRoute = require('./zomatoRoute')

Route.get('/', (req, res, next) => {
  res.status(200).json({msg: 'Initial Commit'})
})

Route.use('/zomato', zomatoRoute)

module.exports = Route;