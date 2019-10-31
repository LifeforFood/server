const Route = require('express').Router();

Route.get('/', (req, res, next) => {
  res.status(200).json({msg: 'Initial Commit'})
})

module.exports = Route;