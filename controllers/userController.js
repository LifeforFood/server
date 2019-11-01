const User = require('../models/user');
const { comparePassword } = require('../helpers/hash');
const { signToken } = require('../helpers/jwt');
const { OAuth2Client } = require('google-auth-library');
const { sendMail } = require('../helpers/sendMail');


module.exports = {
  signin (req, res, next) {
    const { email, password } = req.body;
    if( !email || !password ) throw { msg: 'empty' }
    else {
      User.findOne({ email })
        .then(user => {
          if(user && comparePassword(password, user.password)) {
            const payload = { id: user._id, username: user.username, email: user.email }
            const serverToken = signToken(payload);
            res.status(200).json({ token: serverToken, user })
          } else {
            throw { msg: 'wrong' }
          }
        })
        .catch(next)
    }
  },
  signinG (req, res, next) {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    let username
    let email
    let password
    client.verifyIdToken({
      idToken: req.body.googleToken,
      audience: process.env.GOOGLE_CLIENT_ID
    })
      .then(ticket => {
        const payload = ticket.getPayload()
        username = payload.name;
        email = payload.email;
        for(let i=0; i<10; i++ ){
          let alfa = '12345y8foejfiqpfhief-23ijfvnejdvmk;damnk;smcs;cnmksdnjsdflbnjdsklvbnsdlvn';
          let rand = Math.floor(Math.random() * alfa.length);
          password += alfa[rand]
        }
        return User.findOne({ email })
      })
      .then(user => {
        if(user) {
          return user
        } else {
          sendMail(email, `Thanks for Register <img src='https://media.giphy.com/media/TpsTNF36M4kX6/giphy.gif'>`)
          return User.create({ username, password, email })
        }
      })
      .then((user) => {
        const payloadCreate = {username, email, password}
        const tokenCreate = signToken(payloadCreate);
        res.status(200).json({ token: tokenCreate, user })
      })
      .catch(next)
  },
  signup (req, res, next) {
    const { username, password, email } = req.body
    if( !username || !password || !email ) throw { msg: 'empty' }
    else {
      User.create({ username, password, email })
        .then(user => {
          const payload = {
            id: user._id,
            username: user.username,
            email: user.email
          }
          sendMail(email, 'Thanks For Register!')
          const token = signToken(payload)
          res.status(201).json({ msg: 'User Created!', data: user, token })
        })
        .catch(next)
    }
  }
}