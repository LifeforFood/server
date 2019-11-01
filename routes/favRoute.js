const Route = require('express').Router()
const FavCont = require('../controllers/favController')
const { authentication } = require('../middlewares/auth')

Route.get('/', authentication, FavCont.getFavAuthen);
Route.post('/', authentication, FavCont.createFav);
Route.delete('/:id', authentication, FavCont.deleteFav);

module.exports = Route;