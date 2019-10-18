/*jslint esversion: 6*/
const request = require('request');
const config = require('../config');

function TelegramBot() {
  const bot = this;

  bot.lastMsgId = 69;

  bot.init = TOKEN => {
    bot.token = TOKEN;
    return new Promise((resolve, reject) => {
      const url = `https://api.telegram.org/bot${bot.token}/getMe`;
      request(url, (error, r, body) => {
        const response = JSON.parse(body).result;
        if (error) return;
        if (!response) return;
        bot.id = response.id || '';
        bot.first_name = response.first_name || '';
        bot.last_name = response.last_name || '';
        bot.username = response.username || '';
        bot.language_code = response.language_code || '';
        resolve();
      });
    });
  };

  bot.setWebhook = api => new Promise((resolve, reject) => {
    //var url = 'https://api.telegram.org/beta/bot' + bot.token + '/setWebhook?url=https://belgocanadian.com/bots/' + api;
    const url = `https://api.telegram.org/bot${bot.token}/setWebhook?url=https://belgocanadian.com/bots/${api}`;
    request(url, (error, r, body) => {
      if (error) return console.error(error);
      resolve(body);
    });
  });

  bot.getWebhook = () => new Promise((resolve, reject) => {
    const url = `https://api.telegram.org/bot${bot.token}/getWebhookInfo`;
    request(url, (error, r, body) => {
      if (error) return;
      resolve(body);
    });
  });

  bot.deleteWebhook = () => new Promise((resolve, reject) => {
    const url = `https://api.telegram.org/beta/bot${bot.token}/deleteWebhook`;
    request(url, (error, r, body) => {
      if (error) return;
      resolve(body);
    });
  });

  bot.sendMessage = (channel, message) => {
    message = encodeURIComponent(message);
    return new Promise((resolve, reject) => {
      const url = `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}`;
      request(url, (error, r, body) => {
        if (error) return;
        resolve();
      });
    });
  };

  bot.kick = (channel, user, minutes) => {
    if (!minutes) minutes = 1;
    let date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    date = Math.floor(date / 1000);
    return new Promise((resolve, reject) => {
      const url = `https://api.telegram.org/bot${bot.token}/kickChatMember?chat_id=${channel}&user_id=${user}&until_date=${date}`;
      request(url, (error, r, body) => {
        if (error) return;
        resolve();
      });
    });
  };

  bot.notifyAdmin = msg => {
    b.sendMessage(config.masterChat, msg);
  };

  bot.notifyAdmins = msg => {
    b.sendMessage(config.adminChat, msg);
  };

  bot.broadcast = (channels, message) => {
    channels.forEach((channel, index) => {
      setTimeout(() => {
        bot.sendMessage(channel, message);
      }, index * 10);
    });
  };

  bot.getChat = channel => new Promise((resolve, reject) => {
    const url = `https://api.telegram.org/bot${bot.token}/getChat?chat_id=${channel}`;
    request(encodeURI(url), (error, r, body) => {
      const response = JSON.parse(body).result;
      //console.log(response);
      if (error) return;
      if (!response) return;
      resolve(response);
    });
  });

  bot.exportChatInviteLink = channel => new Promise((resolve, reject) => {
    const url = `https://api.telegram.org/bot${bot.token}/exportChatInviteLink?chat_id=${channel}`;
    request(encodeURI(url), (error, r, body) => {
      const response = JSON.parse(body).result;
      //console.log(response);
      if (error) return;
      if (!response) return;
      resolve(response);
    });
  });

  bot.getChatMember = (channel, user_id) => new Promise((resolve, reject) => {
    const url = `https://api.telegram.org/bot${bot.token}/getChatMember?chat_id=${channel}&user_id=${user_id}`;
    request(url, (error, r, body) => {
      if (error) return reject(error);
      const response = JSON.parse(body).result;
      resolve(!(!response || ['restricted', 'left', 'kicked'].includes(response.status)));
    });
  });

  bot.sendKeyboard = (channel, message, keyboard) => new Promise((resolve, reject) => {
    const url = `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}&reply_markup=${JSON.stringify(keyboard)}`;
    request(encodeURI(url), (error, r, body) => {
      if (error) return;
      resolve();
    });
  });

  bot.sendPhoto = (channel, photo) => new Promise((resolve, reject) => {
    const url = `https://api.telegram.org/bot${bot.token}/sendPhoto?chat_id=${channel}&photo=${photo}`;
    request(encodeURI(url), (error, r, body) => {
      if (error) return;
      resolve();
    });
  });

  bot.getChatMember = (chat_id, user_id) => new Promise((resolve, reject) => {
    const url = `https://api.telegram.org/bot${bot.token}/getChatMember?chat_id=${chat_id}&user_id=${user_id}`;
    request(url, (error, r, body) => {
      const response = JSON.parse(body).result;
      if(error) return;
      if(!response || ['restricted', 'left', 'kicked'].includes(response.status)) return reject();
      resolve(response);
    });
  });

  bot.getName = () => {
    if (bot.last_name) {
      return `${bot.first_name} ${bot.last_name}`;
    } else {
      return bot.first_name;
    }
  };

  bot.introduceYourself = () => {
    console.log(`Hello, my name is ${bot.getName()}. You can talk to me through my username: @${bot.username}`);
  };
}

const TOKEN = config.tokens.telegram.tenthings;
const b = new TelegramBot();
b.init(TOKEN).then(() => {
    //b.deleteWebhook();
  b.getWebhook().then(body => {
    if (JSON.parse(body).result && 'https://belgocanadian.com/bots/tenthings' === JSON.parse(body).result.url) {
      console.log('Webhook Set');
    } else {
      b.setWebhook('tenthings').then(body => {
        b.introduceYourself();
      });
    }
  });
});

module.exports = b;
