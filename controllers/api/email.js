var config = require('../../config');

var router = require('express').Router();
var request = require('request');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(config.gmail);

//https://www.google.com/recaptcha/api/siteverify
router.post('/', function (req, res, next) {
  // g-recaptcha-response is the key that browser will generate upon form submit.
  // if its blank or null means user has not selected the captcha, so return the error.
  if(req.body.captcha['g-recaptcha-response'] === undefined || req.body.captcha['g-recaptcha-response'] === '' || req.body.captcha['g-recaptcha-response'] === null) {
    return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
  }
  // Put your secret key here.
  var secretKey = "--paste your secret key here--";
  // req.connection.remoteAddress will provide IP address of connected user.
  var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + config.captcha.secretKey + "&response=" + req.body.captcha['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  // Hitting GET request to the URL, Google will respond with success or error scenario.
  request(verificationUrl,function(error,response,body) {
    body = JSON.parse(body);
    // Success will be true or false depending upon captcha validation.
    if(body.success !== undefined && !body.success) {
      return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
    }
    var email = req.body.email;
    sendMail({
      from: 'youremail@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: JSON.stringify(email)
    });
    res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
  });
});

module.exports = router;

function sendMail(mailOptions) {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
