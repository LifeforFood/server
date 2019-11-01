const router = require('express').Router()
const directionController = require('../controllers/directionController')
const { authentication } = require('../middlewares/auth');

router.post('/', authentication, directionController.direction)

module.exports = router