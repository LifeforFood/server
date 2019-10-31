const directionApi = require('../apis/googleDirectionAPI')

class DirectionController{
    static direction(req, res, next){
        const {lat, lng} = req.body
        directionApi.post(`/json?origin=hacktiv8&destination=${lat},${lng}&key=${process.env.API_KEY_GOOGLE}`)
        .then(({data})=>{
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = DirectionController