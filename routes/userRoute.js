const Route = require('express').Router();
const userCont = require('../controllers/userController');

Route.post('/signin', userCont.signin);

module.exports = Route;