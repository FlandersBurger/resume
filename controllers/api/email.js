var config = require('../../config');

var router = require('express').Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(config.gmail);

//https://www.google.com/recaptcha/api/siteverify
router.post('/', function (req, res, next) {
  var email = req.body;
  sendMail(res, {
    from: email.email,
    to: 'debackerlaurent@gmail.com',
    subject: email.about,
    text: JSON.stringify(email)
  });
});

module.exports = router;

function sendMail(res, mailOptions) {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return res.sendStatus(500);
    } else {
      console.log('Email sent: ' + info.response);
      return res.sendStatus(200);
    }
  });
}
