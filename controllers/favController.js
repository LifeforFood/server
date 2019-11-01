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
    if(!zomatoId) throw { msg: 'empty' }
    else {
      Fav.create({ zomatoId })
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