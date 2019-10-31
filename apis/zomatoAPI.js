const axios = require('axios')

const zomatoAPI = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/',
  headers:{
    'user-key': process.env.ZOMATO_API_KEY
  }
})

module.exports = zomatoAPI