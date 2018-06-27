var router = require('express').Router();
var request = require('request');
var schedule = require('node-schedule');

var games = {};

var lists = [
  {
    name: 'Camera Brands',
    values: {
      'nikon': null,
      'canon': null,
      'sony': null,
      'pentax': null,
      'olympus': null,
      'fujifilm': null,
      'kodak': null,
      'leica': null,
      'panasonic': null,
      'lumix': null
    }
  }
];


function Bot() {
  var bot = this;

  bot.lastMsgId = 69;

  bot.init = function(TOKEN) {
    return new Promise(function (resolve, reject) {
      var url = 'https://api.telegram.org/bot' + TOKEN + '/getMe';
      request(url, function (error, r, body) {
        var response = JSON.parse(body).result;
        if(error) return;
        if(!response) return;
        bot.id = response.id || '';
        bot.first_name = response.first_name || '';
        bot.last_name = response.last_name || '';
        bot.username = response.username || '';
        bot.language_code = response.language_code || '';
        resolve();
      });
    });
  };

  bot.setWebhook = function() {
    return new Promise(function (resolve, reject) {
      var url = 'https://api.telegram.org/bot' + TOKEN + '/setWebhook?url=https://belgocanadian.com/api/bots';
      request(url, function (error, r, body) {
        var response = JSON.parse(body).result;
        if(error) return;
        if(!response) return;
        resolve();
      });
    });
  };
  bot.getWebhook = function() {
    return new Promise(function (resolve, reject) {
      var url = 'https://api.telegram.org/bot' + TOKEN + '/getWebhookInfo';
      request(url, function (error, r, body) {
        var response = JSON.parse(body).result;
        if(error) return;
        if(!response) return;
        resolve();
      });
    });
  };

  bot.sendMessage = function(channel, message) {
    return new Promise(function (resolve, reject) {
      var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage?chat_id=' + channel + '&text=' + message;
      request(encodeURI(url), function (error, r, body) {
        var response = JSON.parse(body).result;
        //console.log(response);
        if(error) return;
        if(!response) return;
        resolve();
      });
    });
  };

  bot.getUpdates = function() {
    return new Promise(function (resolve, reject) {
      var url = 'https://api.telegram.org/bot' + TOKEN + '/getUpdates';
      request(url, function (error, r, body) {
        var response = JSON.parse(body).result;
        if(error) return;
        if(!response) return;
        var lastMsgId = 0;
        var messages = response.map(function(msg) {
          if (msg.message) {
            if (lastMsgId < msg.message.message_id) lastMsgId = msg.message.message_id;
            return {
              id: msg.message.message_id,
              from: msg.message.from,
              text: msg.message.text,
              chat: msg.message.chat
            };
          } else {
            return {
              id: null,
            };
          }
        }).filter(function(msg) {
          if (!msg.id) return false;
          if (msg.chat.id !== 592503547) return false;
          if (msg.from.id === 500242425) return false;
          return msg.id > bot.lastMsgId;
        }).forEach(function(msg) {
          bot.lastMsgId = msg.id;
          if (msg.text === '/start') {
            bot.sendMessage(msg.chat.id, 'To start a game, type /newgame');
          } else if (msg.text === '/newgame' && !games[msg.chat.id]) {
            games[msg.chat.id] = new Game(msg.chat.id);
            bot.sendMessage(msg.chat.id, bot.list.name);
          } else if (msg.text === '/newgame' && games[msg.chat.id]) {
            bot.sendMessage(msg.chat.id, 'A game is already in progress');
          } else if (msg.text === '/stop' && games[msg.chat.id]) {
            delete games[msg.chat.id];
            bot.sendMessage(msg.chat.id, 'Game stopped');
          } else {

          }
        });
        resolve();
      });
    });
  };
  bot.getName = function() {
    if (bot.last_name) {
      return bot.first_name + ' ' + bot.last_name;
    } else {
      return bot.first_name;
    }
  };

  bot.introduceYourself = function() {
    console.log('Hello, my name is ' + bot.getName() + '. You can talk to me through my username: @' + bot.username);
  };

}

var TOKEN = '500242425:AAHT8jTIn7_NN-V0OiKGYDPmK9vxw2cJgL0';
var b = new Bot();
b.init(TOKEN).then(function() {
  b.introduceYourself();
  b.setWebhook();
  /*
  var j = schedule.scheduleJob('* / 1 * * * * *', function(){
    b.getUpdates();
  });
  */

});

var Game = function(id) {
  this.id = id;
  this.list = lists[Math.floor(Math.random() * lists.length)];
};

router.post('/', function (req, res, next) {
  var msg = {
    id: req.body.message.message_id,
    from: req.body.message.from,
    text: req.body.message.text,
    chat: req.body.message.chat
  };
  console.log(msg.chat);
  console.log(msg.chat.id + ' - ' + msg.from.first_name + ': ' + msg.text);
  if (msg.text === '/start') {
    b.sendMessage(msg.chat.id, 'To start a game, type /newgame');
  } else if (msg.text === '/newgame' && !games[msg.chat.id]) {
    games[msg.chat.id] = new Game(msg.chat.id);
    b.sendMessage(msg.chat.id, bot.list.name);
  } else if (msg.text === '/newgame' && games[msg.chat.id]) {
    b.sendMessage(msg.chat.id, 'A game is already in progress');
  } else if (msg.text === '/stop' && games[msg.chat.id]) {
    delete games[msg.chat.id];
    b.sendMessage(msg.chat.id, 'Game stopped');
  } else {

  }
  b.sendMessage(msg.chat.id, 'Received Post');
  res.json({ message: 'post ok'});
});
router.get('/', function (req, res, next) {
  b.sendMessage(msg.chat.id, 'Received Get');
  res.json({ message: 'get ok'});
});

module.exports = router;
