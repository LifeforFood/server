const nodemailer = require('nodemailer');

module.exports = {
    sendMail(receiver,msg) {
      let transporter = nodemailer.createTransport({
          service : 'gmail',
          auth : {
              user : process.env.GMAIL_MAIL,
              pass : process.env.GMAIL_PASS
          }
      });

      let mainOption = {
              from : process.env.GMAIL_MAIL,
              to : receiver,
              subject : 'Welcome to LIFE FOR FOOD, All need FOOD',
              text : msg || 'Thanks for Register :)',
              html : `<a href="https://www.gambaranimasi.org/cat-email-235.htm"><img src="https://www.gambaranimasi.org/data/media/235/animasi-bergerak-email-0220.gif" border="0" alt="animasi-bergerak-email-0220" /></a>`
      }

      transporter.sendMail(mainOption)
          .then(function(){
            console.log('Successfully Send Mail!')
          })
      .catch(console.log)
          }
}