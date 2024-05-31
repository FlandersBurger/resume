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

  bot.muteReasons = [
    "Bad Request: not enough rights to send text messages to the chat",
    "Forbidden: bot was kicked from the supergroup chat",
    "Forbidden: bot was blocked by the user",
    "Forbidden: the group chat was deleted",
  ];

  bot.init = async (token) => {
    Object.assign(bot, { token, baseUrl: `https://api.telegram.org/bot${token}` });
    const url = `${bot.baseUrl}/getMe`;
    try {
      const response = await axios.get(url);
      if (!response || !response.data) return;
      Object.assign(bot, response.data.result);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  bot.setWebhook = async (api) => {
    //var url = 'https://api.telegram.org/beta/bot' + bot.token + '/setWebhook?url=https://belgocanadian.com/bots/' + api;
    const allowed_updates = JSON.stringify(["message", "callback_query"]);
    const url = `${bot.baseUrl}/setWebhook?url=https://belgocanadian.com/bots/${api}&allowed_updates=${allowed_updates}`;
    try {
      return await axios.get(url);
    } catch (error) {
      bot.notifyAdmin("Set Webhook Fail");
      console.error(error.response.data);
    }
  };

  bot.getWebhook = async () => {
    const url = `${bot.baseUrl}/getWebhookInfo`;
    try {
      const response = await axios.get(url);
      return response.data.result;
    } catch (error) {
      bot.notifyAdmin("Get Webhook Fail");
      console.error(error.response.data);
    }
  };

  bot.deleteWebhook = async () => {
    const url = `${bot.baseUrl}/deleteWebhook`;
    try {
      return await axios.get(url);
    } catch (error) {
      bot.notifyAdmin("Delete Webhook Fail");
      console.error(error.response.data);
    }
  };

  bot.sendMessage = (channel, message, topic) => {
    message = encodeURIComponent(message);
    let url = `${bot.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}`;
    if (topic) url += `&message_thread_id=${topic}`;
    axios.get(url).catch((error) => {
      if (error.response) {
        if (bot.muteReasons.includes(error.response.data.description)) {
          errors.botMuted(channel);
        } else {
          console.error(error.response.data);
        }
      } else {
        bot.notifyAdmin(`Send Message Fail`);
        console.error(error);
      }
    });
  };

  bot.deleteMessage = async (channel, message_id) => {
    const url = `${bot.baseUrl}/deleteMessage?chat_id=${channel}&message_id=${message_id}`;
    try {
      await axios.get(url);
    } catch (error) {
      bot.notifyAdmin("Delete Message Fail");
      console.error(error.response.data);
    }
  };

  bot.queueMessage = (channel, message) => {
    messageQueue.add("", { channel, message }, {});
  };

  messageQueue.process(({ data }) => {
    bot.sendMessage(data.channel, data.message);
  });

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
      bot.notifyAdmin("Kick Fail");
      console.error(error.response.data);
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
      bot.notifyAdmin("Get Invite Link Fail");
      console.error(error.response.data);
    }
  };

  bot.getChat = async (channel) => {
    const url = `${bot.baseUrl}/getChat?chat_id=${channel}`;
    try {
      const response = await axios.get(encodeURI(url));
      if (!response || !response.data || !response.data.result) return;
      if (response.data.result.invite_link) return `Group Chat: ${response.data.result.invite_link}`;
      else if (response.data.result.title) return `Group Chat: ${response.data.result.title}`;
      else if (response.data.result.username) return `Private Chat: @${response.data.result.username}`;
      else if (response.data.result.first_name) return `Private Chat: ${response.data.result.first_name}`;
      else if (response.data.result.type === "private") return `Private Chat`;
    } catch (error) {
      console.error("Get Chat Fail");
      if (error.response.data.error_code === 400) {
        errors.chatNotFound(channel);
      } else {
        bot.notifyAdmin("Get Chat Fail");
        console.error(error.response.data);
      }
      return `Chat not found: ${channel} - ${error.response.data.error_code}`;
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
      bot.notifyAdmin("Get Chat Member Fail");
      console.error(error.response.data);
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
      bot.notifyAdmin("Check Admin Fail");
      console.error(error.response.data);
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
      if (error.response) {
        if (bot.muteReasons.includes(error.response.data.description)) {
          errors.botMuted(channel);
        } else {
          console.error(error.response.data);
        }
      } else {
        bot.notifyAdmin("Send Keyboard Fail");
        console.error(error);
        console.error(keyboard.inline_keyboard[0]);
      }
    }
  };

  bot.sendPhoto = async (channel, photo) => {
    const url = `${bot.baseUrl}/sendPhoto?chat_id=${channel}&photo=${photo}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      bot.notifyAdmin("Send Photo Fail");
      console.error(error.response.data);
    }
  };

  bot.sendAnimation = async (channel, animation) => {
    const url = `${bot.baseUrl}/sendAnimation?chat_id=${channel}&animation=${animation}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      console.error(`Send Animation Fail to ${channel} -> animation`);
    }
  };

  bot.editKeyboard = async (channel, message_id, keyboard) => {
    let url = `${bot.baseUrl}/editMessageReplyMarkup?chat_id=${channel}&message_id=${message_id}`;
    if (keyboard) url += `&reply_markup=${JSON.stringify(keyboard)}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      bot.notifyAdmin("Edit Keyboard Fail");
      console.error(error.response.data);
    }
  };

  bot.answerCallback = async (callback_query_id, text) => {
    const url = `${bot.baseUrl}/answerCallbackQuery?callback_query_id=${callback_query_id}&text=${text}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      bot.notifyAdmin("Answer Callback Fail");
      console.error(error.response.data);
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
      bot.notifyAdmin("Set Commands  Fail");
      console.error(error.response.data);
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
