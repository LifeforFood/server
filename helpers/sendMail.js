const nodemailer = require('nodemailer');

module.exports = {
    sendMail(receiver,message,option) {
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
              subject : 'Welcome to LIFE FOR FOOD, All need FOOD' || option.subject,
              text : message.msg
      }


      transporter.sendMail(mainOption)
          .then(function(){
              console.log('Successfully Send Mail!')
          })
      .catch(console.log)
          }
}