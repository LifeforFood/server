const Mongoose = require('mongoose')
const Schema = Mongoose.Schema;
const hash = require('../helpers/hash');

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username is required!']
  },
  email: {
    type: String,
    required: [true, 'email is required!'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'password is required!']
  },
  createdAt : Date
})

UserSchema.pre('save', function (next) {
  const date = new Date();
  this.password = hash.hashPassword(this.password)
  this.createdAt = date.toLocaleString();
  next();
})

const User = Mongoose.model('users', UserSchema)

User.createCollection()
  .then(() => console.log(`User Collection is created!`))
  .catch(console.log);

module.exports = User;