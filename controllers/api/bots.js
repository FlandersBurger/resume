var router = require('express').Router();
var request = require('request');
var schedule = require('node-schedule');

var games = {};

var prompts = {
  en: {
    guessed: function(user, text) {
      return user + ' got ' + text;
    }
  },
  fr: {
    guessed: function(user, text) {
      return user + ' a trouve ' + text;
    }
  },
  nl: {
    guessed: function(user, text) {
      return user + ' heeft ' + text + ' gevonden';
    }
  }
};

function getLanguage(language) {
  if (language) {
    if (prompts[language]) {
      return language;
    } else {
      return 'en';
    }
  } else {
    return 'en';
  }
}

var lists = [
  {
    name: 'Camera Brands',
    values: [
      { value: 'nikon' },
      { value: 'canon' },
      { value: 'sony' },
      { value: 'pentax' },
      { value: 'olympus' },
      { value: 'fujifilm' },
      { value: 'kodak' },
      { value: 'leica' },
      { value: 'panasonic' },
      { value: 'lumix' }
    ]
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
      var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage?chat_id=' + channel + '&text=' + encodeURI(message);
      request(encodeURI(url), function (error, r, body) {
        var response = JSON.parse(body).result;
        //console.log(response);
        if(error) return;
        if(!response) return;
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

function stringifyList(list) {
  var str;
  Object.keys(list).forEach(function(item, index) {
    str += index + ': ' + (item.guesser ? item.value : '') + '/n';
  });
  return str;
}

router.post('/', function (req, res, next) {
  var msg;
  if (!req.body.message) {
    msg = {
      id: '592503547',
      from: {
        first_name: 'Bot Error'
      },
      command: '/error',
      text: 'No clue what to do',
      chat: {
        id: '592503547'
      }
    };
  } else {
    msg = {
      id: req.body.message.message_id,
      from: req.body.message.from,
      command: req.body.message.text.substring(0, req.body.message.text.indexOf(' ') < 0 ? req.body.message.text.length : req.body.message.text.indexOf(' ')),
      text: req.body.message.text.substring(req.body.message.text.indexOf(' ') + 1),
      chat: req.body.message.chat
    };
  }
  console.log(msg.id + ' - ' + msg.from.first_name + ': ' + msg.command + ' -> ' + msg.text);
  switch (msg.command) {
    case '/error':
      b.sendMessage(msg.chat.id, msg.text);
      break;
    case '/start':
      b.sendMessage(msg.chat.id, 'To start a game, type /newgame');
      break;
    case '/newgame':
      if (games[msg.chat.id]) {
        b.sendMessage(msg.chat.id, 'A game is already in progress');
      } else {
        games[msg.chat.id] = new Game(msg.chat.id);
        b.sendMessage(msg.chat.id, 'A new game will start in 5 seconds!');
        setTimeout(function() {
          b.sendMessage(msg.chat.id, games[msg.chat.id].list.name);
        }, 5000);
      }
      break;
    case '/stop':
      delete games[msg.chat.id];
      b.sendMessage(msg.chat.id, 'Game stopped');
      break;
    default:
      if (games[msg.chat.id]) {
        games[msg.chat.id].list.values.forEach(function(item) {
          if (item.value === msg.text.toLowerCase() && !item.guesser) {
            item.guesser = msg.from;
            b.sendMessage(msg.chat.id, prompts[getLanguage(msg.from.language_code)].guessed(msg.from.first_name, msg.text) + '/n' + stringifyList(games[msg.chat.id].list.values));
          } else if (item.value === msg.text.toLowerCase() && item.guesser) {
            b.sendMessage(msg.chat.id, item.guesser.first_name + ' already guessed ' + msg.text + '/nToo bad, ' + msg.from.first_name);
          }
        });
      } else {
        b.sendMessage(msg.chat.id, 'Huh?');
      }
  }
  res.sendStatus(200);
  //b.sendMessage(msg.chat.id, 'Received Post');
});
router.get('/', function (req, res, next) {
  //b.sendMessage(msg.chat.id, 'Received Get');
  res.json({ message: 'get ok'});
});

module.exports = router;
