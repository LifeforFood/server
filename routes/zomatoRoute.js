const router = require('express').Router()
const ZomatoController = require('../controllers/zomatoController')
const { authentication } = require('../middlewares/auth');

router.get('/restaurants', authentication, ZomatoController.getRestaurants)
router.get('/restaurants/:cityId/search?', authentication, ZomatoController.searchRestaurants)
router.get('/random/', authentication, ZomatoController.randomRestaurant)
router.get('/:restaurantId', authentication, ZomatoController.restaurantDetail)

module.exports = router