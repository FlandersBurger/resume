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
    if (prompts[language.substring(0, 1)]) {
      return language.substring(0, 1);
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
      { value: 'Nikon' },
      { value: 'Canon' },
      { value: 'Sony' },
      { value: 'Pentax' },
      { value: 'Olympus' },
      { value: 'Fujifilm' },
      { value: 'Kodak' },
      { value: 'Leica' },
      { value: 'Panasonic' },
      { value: 'Lumix' }
    ]
  },
  {
    name: 'Most Populous Countries',
    values: [
      { value: 'China' },
      { value: 'India' },
      { value: 'Bangladesh' },
      { value: 'Japan' },
      { value: 'Russia' },
      { value: 'USA' },
      { value: 'Nigeria' },
      { value: 'Indonesia' },
      { value: 'Brazil' },
      { value: 'Pakistan' }
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

function countdown(timer, chat, msg) {
  if (timer > 0) {
    b.sendMessage(chat, timer);
    setTimeout(function() {
      countdown(--timer, chat, msg);
    }, 1000);
  } else {
    b.sendMessage(chat, msg);
  }
}

var Game = function(id) {
  this.id = id;
  this.list = {};
  this.players = {};

  this.newRound = function(timer) {
    this.list = lists[Math.floor(Math.random() * lists.length)];
    b.sendMessage(this.id, 'A new round will start in 5');
    countdown(4, this.id, this.list.name);
  };

  this.hint = function() {
    for (var i in this.list.values) {
      var item = this.list.values[i];
      if (!item.guesser) {
        b.sendMessage(this.id, item.value.substring(0, 1) + "*".repeat(item.value.length - 2) + item.value.substring(item.value.length - 1));
      }
    }
  };

  this.guess = function(msg) {
    if (!this.players[msg.from.id]) {
      this.players[msg.from.id] = msg.from;
      this.players[msg.from.id].score = 0;
    }
    for (var i in this.list.values) {
      var item = this.list.values[i];
      if (item.value.toLowerCase() === msg.text.toLowerCase() && !item.guesser) {
        item.guesser = msg.from;
        this.players[msg.from.id].score++;
        b.sendMessage(msg.chat.id, prompts[getLanguage(msg.from.language_code)].guessed(msg.from.first_name, msg.text + '\n' + stringifyList(games[msg.chat.id].list.values)));
        return this.checkRound();
      } else if (item.value.toLowerCase() === msg.text.toLowerCase() && item.guesser) {
        return b.sendMessage(msg.chat.id, item.guesser.first_name + ' already guessed ' + msg.text + '\nToo bad, ' + msg.from.first_name);
      }
    }
  };

  this.checkRound = function() {
    console.log(this.list.values.filter(function(item) {
      return !item.guesser;
    }).length);
    if (this.list.values.filter(function(item) {
      return !item.guesser;
    }).length === 0) {
      var str = '';
       Object.values(this.players).map(function(player) {
        return player;
      }).sort(function(a, b) {
        return a.score - b.score;
      }).slice(0, 10).forEach(function(player, index) {
        str += (index + 1) + ': ' + player.first_name + '\n';
      });
      b.sendMessage(this.id, str);
      this.newRound(5);
    }
  };

  this.newRound(5);
};

function stringifyList(list) {
  var str = '';
  list.forEach(function(item, index) {
    str += (index + 1) + ': ' + (item.guesser ? item.value : '') + '\n';
  });
  return str;
}

router.post('/', function (req, res, next) {
  var msg, i, item;
  if (!req.body.message || !req.body.message.text) {
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
      }
      break;
    case '/stop':
      delete games[msg.chat.id];
      b.sendMessage(msg.chat.id, 'Game stopped');
      break;
    case '/hint':
      if (games[msg.chat.id]) {
        games[msg.chat.id].hint();
      } else {
        b.sendMessage(msg.chat.id, 'There is no game in progress');
      }
      break;
    default:
      if (games[msg.chat.id]) {
        games[msg.chat.id].guess(msg);
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
