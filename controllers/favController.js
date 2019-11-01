const Fav = require('../models/favorite');


module.exports = {
  getFavAuthen (req, res, next) {
    const UserId = req.loggedUser.id
    Fav.find({ UserId }).populate('UserId')
      .then(favs => {
        res.status(200).json(favs)
      })
      .catch(next)
  },
  createFav (req, res, next) {
    const UserId = req.loggedUser.id;
    const zomatoId = req.body.zomatoId;
    const name = req.body.name
    if(!zomatoId) throw { msg: 'empty' }
    else {
      Fav.findOne({ zomatoId })
        .then(zomato => {
          if(zomato) throw { code: 11000 }
          else {
            return Fav.create({ zomatoId, name })
          }
        })
        .then(fav => {
          return Fav.findByIdAndUpdate({ _id: fav._id }, { $push: { UserId }})
        })
        .then(() => {
          res.status(200).json({ msg: 'success created!'})
        })
        .catch(next)
    }
  },
  deleteFav (req, res, next) {
    const _id = req.params.id
    Fav.findByIdAndDelete({ _id })
      .then(() => {
        res.status(200).json({ msg: 'success deleted!' })
      })
      .catch(next)
  }
}