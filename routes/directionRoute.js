const router = require('express').Router()
const directionController = require('../controllers/directionController')

router.post('/', directionController.direction)

module.exports = router