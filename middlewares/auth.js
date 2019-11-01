const { decodeToken } = require('../helpers/jwt');
const User = require('../models/user');
const Fav = require('../models/favorite');

module.exports = {
  authentication (req, res, next) {
    try{
      if(req.headers.token) {
        const decode = decodeToken(req.headers.token)
        User.findOne({ email: decode.email })
          .then(user => {
            if(user) {
              req.loggedUser = decode;
              next()
            } else {
              throw { msg: 'iToken' }
            }
          })
          .catch(next)
      } else {
        throw { msg: 'authen' }
      }
    }
    catch(err) {
      next(err)
    }
  }
}