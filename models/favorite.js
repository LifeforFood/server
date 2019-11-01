const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const FavSchema = new Schema({
  zomatoId: {
    type: String,
    required: true
  },
  UserId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  ],
  createdAt: Date
})

FavSchema.pre('save', function(next){
  this.createdAt = new Date();
  next()
})

const Fav = Mongoose.model('favs', FavSchema);

Fav.createCollection()
  .then(() => console.log('Fav Schema created!'))
  .catch(console.log)

module.exports = Fav;