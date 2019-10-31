const Route = require('express').Router();
const userCont = require('../controllers/userController');
const { authentication } = require('../middlewares/auth');

Route.post('/signin', userCont.signin);
Route.post('/signinG', userCont.signinG);
Route.post('/signup', userCont.signup);

Route.get('/', authentication, userCont.getTest);

module.exports = Route;