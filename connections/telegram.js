const axios = require("axios").default;

const Queue = require("bull");
const config = require("../config");
const i18n = require("../i18n");
const errors = require("../controllers/bots/tenthings/errors");

const TOKEN = config.tokens.telegram.tenthings;

const messageQueue = new Queue("sendMessage", {
  redis: {
    port: config.redis.port,
    host: "localhost",
    password: config.redis.password,
  },
  limiter: {
    max: 30,
    duration: 1000,
  },
});

messageQueue.on("completed", function (job) {
  //Job finished we remove it]
  job.remove();
});

function TelegramBot() {
  const bot = this;

  bot.token = "";
  bot.baseUrl = "";
  bot.first_name = "";
  bot.last_name = "";
  bot.username = "";

  bot.init = async (token) => {
    Object.assign(bot, { token, baseUrl: `https://api.telegram.org/bot${token}` });
    const url = `${bot.baseUrl}/getMe`;
    try {
      const response = await axios.get(url);
      if (!response || !response.data) return;
      Object.assign(bot, response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  bot.setWebhook = async (api) => {
    //var url = 'https://api.telegram.org/beta/bot' + bot.token + '/setWebhook?url=https://belgocanadian.com/bots/' + api;
    const allowed_updates = JSON.stringify(["message", "callback_query"]);
    const url = `${bot.baseUrl}/setWebhook?url=https://belgocanadian.com/bots/${api}&allowed_updates=${allowed_updates}`;
    try {
      return await axios.get(url);
    } catch (error) {
      console.error("Set Webhook Fail");
      console.error(error);
    }
  };

  bot.getWebhook = async () => {
    const url = `${bot.baseUrl}/getWebhookInfo`;
    try {
      const response = await axios.get(url);
      return response.data.result;
    } catch (error) {
      console.error("Get Webhook Fail");
      console.error(error);
    }
  };

  bot.deleteWebhook = async () => {
    const url = `${bot.baseUrl}/deleteWebhook`;
    try {
      return await axios.get(url);
    } catch (error) {
      console.error("Delete Webhook Fail");
      console.error(error);
    }
  };

  bot.sendMessage = (channel, message, topic) => {
    message = encodeURIComponent(message);
    let url = `${bot.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}`;
    if (topic) url += `&message_thread_id=${topic}`;
    try {
      axios.get(url);
    } catch (error) {
      console.error("Send Fail");
      console.error(error);
    }
  };

  bot.deleteMessage = async (channel, message_id) => {
    const url = `${bot.baseUrl}/deleteMessage?chat_id=${channel}&message_id=${message_id}`;
    try {
      await axios.get(url);
    } catch (error) {
      console.error("Delete Message Fail");
      console.error(error);
    }
  };

  bot.queueMessage = (channel, message) => {
    messageQueue.add("", { channel, message }, {});
  };

  messageQueue.process(({ data }) => bot.sendMessage(data.channel, data.message));

  //@ts-ignore
  bot.getQueue = async () => await messageQueue.count();

  bot.kick = async (channel, user, minutes) => {
    if (!minutes) minutes = 1;
    let date = new Date();
    const untilDate = Math.floor(date.setTime(date.getTime() + minutes * 60 * 1000) / 1000);
    const url = `${bot.baseUrl}/kickChatMember?chat_id=${channel}&user_id=${user}&until_date=${untilDate}`;
    try {
      await axios.get(url);
    } catch (error) {
      console.error("Kick Fail");
      console.error(error);
    }
  };

  bot.notifyCosmicForce = async (msg, keyboard) => {
    if (keyboard) await bot.sendKeyboard(config.cosmicForceChat, msg, keyboard, 17);
    else await bot.sendMessage(config.cosmicForceChat, msg, 17);
  };

  bot.notifyAdmin = async (msg) => {
    await bot.queueMessage(config.masterChat, msg);
  };

  bot.notify = async (msg) => {
    await bot.queueMessage(config.noticeChannel, msg);
  };

  bot.notifyAdmins = async (msg, keyboard) => {
    if (keyboard) await bot.sendKeyboard(config.adminChat, msg, keyboard);
    else await bot.queueMessage(config.adminChat, msg);
  };

  bot.broadcast = async (channels, message) => {
    await bot.notifyAdmin(`Starting broadcast to ${channels.length} chats`);
    channels.forEach((channel, index) => {
      setTimeout(() => {
        bot.queueMessage(channel, message);
        if (index === channels.length - 1) {
          bot.notifyAdmin("Broadcast finished");
        }
      }, index * 50);
    });
  };

  bot.exportChatInviteLink = async (channel) => {
    const url = `${bot.baseUrl}/exportChatInviteLink?chat_id=${channel}`;
    try {
      const response = await axios.get(encodeURI(url));
      if (!response || !response.data || !response.data.result) return;
      return response.data.result;
    } catch (error) {
      console.error("Get Invite Link Fail");
      console.error(error);
    }
  };

  bot.getChat = async (channel) => {
    const url = `${bot.baseUrl}/getChat?chat_id=${channel}`;
    try {
      const response = await axios.get(encodeURI(url));
      if (!response || !response.data || !response.data.result) return;
      if (response.data.result.invite_link) return response.data.result.invite_link;
      else if (response.data.result.username) return `Private Chat: @${response.data.result.username}`;
    } catch (error) {
      console.error("Get Chat Fail");
      if (error.response.data.error_code === 400) {
        errors.chatNotFound(channel);
      } else {
        console.error(error);
      }
    }
  };

  bot.getChatMember = async (channel, user_id) => {
    const url = `${bot.baseUrl}/getChatMember?chat_id=${channel}&user_id=${user_id}`;
    try {
      const response = await axios.get(url);
      return (
        response &&
        response.data &&
        response.data.result &&
        !["restricted", "left", "kicked"].includes(response.data.result.status)
      );
    } catch (error) {
      console.error("Get Chat Member Fail");
      console.error(error);
    }
  };

  bot.checkAdmin = async (channel, user_id) => {
    const url = `${bot.baseUrl}/getChatMember?chat_id=${channel}&user_id=${user_id}`;
    try {
      const response = await axios.get(url);
      return (
        response &&
        response.data &&
        response.data.result &&
        ["creator", "administrator"].includes(response.data.result.status)
      );
    } catch (error) {
      console.error("Check Admin Fail");
      console.error(error);
    }
  };

  bot.sendKeyboard = async (channel, message, keyboard, topic) => {
    let url = `${bot.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html`;
    url += `&text=${message}`;
    url += `&reply_markup=${JSON.stringify(keyboard)}`;
    if (topic) url += `&message_thread_id=${topic}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      console.error("Send Keyboard Fail");
      console.error(error);
    }
  };

  bot.sendPhoto = async (channel, photo) => {
    const url = `${bot.baseUrl}/sendPhoto?chat_id=${channel}&photo=${photo}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      console.error("Send Photo Fail");
      console.error(error);
    }
  };

  bot.sendAnimation = async (channel, animation) => {
    const url = `${bot.baseUrl}/sendAnimation?chat_id=${channel}&animation=${animation}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      console.error("Send Animation Fail");
      console.error(error);
    }
  };

  bot.editKeyboard = async (channel, message_id, keyboard) => {
    let url = `${bot.baseUrl}/editMessageReplyMarkup?chat_id=${channel}&message_id=${message_id}`;
    if (keyboard) url += `&reply_markup=${JSON.stringify(keyboard)}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      console.error("Edit Keyboard Fail");
      console.error(error);
    }
  };

  bot.answerCallback = async (callback_query_id, text) => {
    const url = `${bot.baseUrl}/answerCallbackQuery?callback_query_id=${callback_query_id}&text=${text}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      console.error("Answer Callback Fail");
      console.error(error);
    }
  };

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

  bot.reset = async () => {
    await axios.get(`${bot.baseUrl}/setWebhook?url=`);
    await axios.get(`${bot.baseUrl}/getUpdates?offset=-5`);
    await bot.init(bot.token);
  };

  bot.setCommands = async (channel, language) => {
    const commands = [
      "list",
      "hint",
      "minigame",
      "tinygame",
      "minihint",
      "tinyhint",
      "skip",
      "miniskip",
      "tinyskip",
      "commands",
      "me",
      "stats",
    ].map((command) => ({
      command: command,
      description: i18n(language, `commands.${command}.description`),
    }));
    const scope = {
      type: "chat",
      chat_id: channel,
    };
    const url = `${bot.baseUrl}/setMyCommands?commands=${JSON.stringify(commands)}&scope=${JSON.stringify(scope)}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      console.error("Set Commands  Fail");
      console.error(error);
    }
  };
}

const b = new TelegramBot();

b.init(TOKEN).then(() => {
  b.getWebhook().then(({ url }) => {
    if ("https://belgocanadian.com/bots/tenthings" === url) {
      console.log("Webhook Set");
    } else {
      b.setWebhook("tenthings").then(() => {
        b.introduceYourself();
      });
    }
  });
});

module.exports = b;
