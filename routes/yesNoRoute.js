const router = require('express').Router()
const axios = require('axios')

router.get('/', (req, res, next)=>{
  axios({
    method: 'get',
    url: 'http://yesno.wtf/api/'
  })
    .then(({data})=>{
      res.status(200).json(data)
    })
    .catch(next)
})

module.exports = router