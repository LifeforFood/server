const zomatoAPI = require('../apis/zomatoAPI')

class ZomatoController{
  static getRestaurants(req, res, next){
    const {cityId} = req.params
    zomatoAPI({
      url: `/collections?city_id=${cityId}&count=10`,
      mehod: 'get'
    })
      .then(({ data })=>{
        res.status(200).json(data.collections)
      })
      .catch(err=>{
        console.log(err)
        res.status(500).json(err)
      })
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
      .catch(err=>{
        console.log(err)
        res.status(500).json(err)
      })
  }

  static randomRestaurant(req, res, next){
    const {cityId} = req.params
    zomatoAPI({
      url: `/collections?city_id=${cityId}&count=25`,
      mehod: 'get'
    })
      .then(({ data })=>{
        const randomNumber = Math.floor(Math.random() * 26)
        res.status(200).json(data.collections[randomNumber])
      })
      .catch(err=>{
        console.log(err)
        res.status(500).json(err)
      })
  }

  static searchRestaurants(req,res,next){
    const {cityId} = req.params
    const {filter} = req.query
    zomatoAPI({
      method: 'GET',
      url:`search?entity_id=${cityId}&entity_type=city&q=${filter}`
    })
    .then(({data})=>{
      res.status(200).json(data)
    }) 
    .catch(err=>{
      console.log(err)
    }) 
  }
  
}

module.exports = ZomatoController