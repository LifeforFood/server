module.exports = (err, req, res, next) => {
  console.log(err)
  if(err.code == 11000) {
    res.status(400).json({ msg: 'Validation Error' })
  } else if(err.msg == 'wrong') {
    res.status(403).json({ msg: 'Email/Password Wrong!' })
  } else if(err.msg == 'empty') {
    res.status(400).json({ msg: 'Unable to send empty data' })
  } else if(err.name == 'JsonWebTokenError') {
    res.status(403).json({ msg: 'Invalid Token Bro' })
  } else if(err.msg == 'authen') {
    res.status(401).json({ msg: 'Authentication Error, please Login first!'})
  }
  else {
    res.status(500).json({msg: 'Internal Server Error'})
  }
}