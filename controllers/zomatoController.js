const zomatoAPI = require('../apis/zomatoAPI')

class ZomatoController{
  static getRestaurants(req, res, next){
    zomatoAPI({
      url: `/search?entity_id=74&entity_type=city&count=9`,
      method: 'get'
    })
      .then(({ data })=>{
        res.status(200).json(data.restaurants)
      })
      .catch(next)
  }

  static restaurantDetail(req, res, next){
    const {restaurantId} = req.params
    zomatoAPI({
      url: `/restaurant?res_id=${restaurantId}`,
      method: 'get'
    })
      .then(({ data })=>{
        res.status(200).json(data)
      })
      .catch(next)
  }

  static randomRestaurant(req, res, next){
    zomatoAPI({
      url: `/search?entity_id=74&entity_type=city&count=25`,
      mehod: 'get'
    })
      .then(({ data })=>{
        console.log(data)
        const randomNumber = Math.floor(Math.random() * 26)
        res.status(200).json(data.restaurants[randomNumber])
      })
      .catch(next)
  }

  static searchRestaurants(req,res,next){
    const {cityId} = req.params
    const {filter} = req.query
    zomatoAPI({
      method: 'GET',
      url:`/search?entity_id=${cityId}&entity_type=city&q=${filter}`
    })
    .then(({data})=>{
      console.log(data)
      res.status(200).json(data)
    }) 
    .catch(err=>{
      console.log(err)
    }) 
  }
  
}

module.exports = ZomatoController