const router = require('express').Router()
const ZomatoController = require('../controllers/zomatoController')

router.get('/restaurants/:cityId', ZomatoController.getRestaurants)
router.get('/restaurants/:cityId/search?', ZomatoController.searchRestaurants)
router.get('/random/:cityId', ZomatoController.randomRestaurant)
router.get('/:restaurantId', ZomatoController.restaurantDetail)

module.exports = router