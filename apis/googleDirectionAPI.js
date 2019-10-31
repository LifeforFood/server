const axios = require('axios')

const directionAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/directions',
})

module.exports = directionAPI