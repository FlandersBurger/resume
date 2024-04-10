/*jslint esversion: 10*/
const router = require("express").Router();
const config = require("../../../config");
const redis = require("../../../redis");
const bot = require("../../../connections/telegram");
const i18n = require("../../../i18n");

const queue = require("./queue");
const maingame = require("./maingame");
const callbacks = require("./callbacks");
const spam = require("./spam");
const commands = require("./commands");
// DO NOT REMOVE jobs
const jobs = require("./jobs");

//-------------//
//redis.set('pause', true);
//-------------//

const Game = require("../../../models/tenthings/game")();
const Player = require("../../../models/tenthings/player")();

const BANNED_USERS = [1726294650];

//const BANNED_USERS = [513934222, 1051982986, 1049452899,1286805649, 1156746047, 1221878428, 928265957, 811672759, 1291668503, 1136025506, 1162690484, 1158491266, 1053547542, 1182973691, 1010339222, 906650538, 1153021237, 623100045, 1269984320];

/*
  Game.update(
    {},
    {
      'players.$[].wins': 0,
      'players.$[].plays': 0,
      'players.$[].score': 0,
      'players.$[].scoreDaily': 0
    },
    { multi: true },
    function(err, saved) {
      if (err) {
        console.log(err);
      } else {
        console.log(saved);
      }
    }
  );
*/
/*
  bot.getChatMember(config.groupChat, config.masterChat)
  .then(function(present) {
    console.log(present);
  });*/

if (process.env.NODE_ENV === "production") {
  bot.notifyAdmin("<b>Started Ten Things</b>");
}

//bot.queueMessage('-1001394022777', "test<a href=\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Regular_Hexagon_Inscribed_in_a_Circle.gif/360px-Regular_Hexagon_Inscribed_in_a_Circle.gif\'>&#8204;</a>\nsome other stuff")
//var url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
//bot.queueMessage(config.masterChat, "test<a href=\'" + url + "\'>&#8204;</a>\nsome other stuff");
//bot.queueMessage(config.masterChat, JSON.stringify(msg));
//The Group: '5b6361dcbd0ff6645df5f225'  '-1001394022777'

/*
bot.exportChatInviteLink('-1001394022777').then(function(chat) {
  console.log(chat);
});
*/

/*
 ██████   ██████  ███████ ████████ 
 ██   ██ ██    ██ ██         ██    
 ██████  ██    ██ ███████    ██    
 ██      ██    ██      ██    ██    
 ██       ██████  ███████    ██    
*/
router.post("/", async ({ body, get }, res, next) => {
  if (body.object === "page") {
    res.status(200).send("EVENT_RECEIVED");
    return console.log(body);
  }
  if (body.message || body.callback_query) {
    const from = body.message ? body.message.from.id : body.callback_query.from.id;
    if (from != config.masterChat && (await redis.get("pause")) === "true") return res.sendStatus(200);
    //if (date.diff(moment(), 'hours') > 1) return res.sendStatus(200);
    if (BANNED_USERS.indexOf(from) >= 0) {
      bot.notifyAdmin(JSON.stringify(get("host")));
      return res.sendStatus(200);
    }
    if (spam.check(body)) {
      return res.sendStatus(200);
    }
  } else {
    return res.sendStatus(200);
  }
  let msg;
  if (body.callback_query) {
    const data = JSON.parse(body.callback_query.data);
    data.requestor = (
      body.callback_query.from.username
        ? `@${body.callback_query.from.username}`
        : `${body.callback_query.from.first_name} ${
            body.callback_query.from.last_name ? body.callback_query.from.last_name : ""
          }`
    )
      //@ts-ignore
      .maskURLs();
    data.from_id = body.callback_query.from.id;
    data.chat_id = body.callback_query.message.chat.id;
    data.message_id = body.callback_query.message.message_id;
    data.callback_query_id = body.callback_query.id;
    data.message = body.callback_query.message.text;

    await callbacks(data);

    return res.sendStatus(200);
  } else if (!body.message.text) {
    if (body.message.new_chat_participant) {
      Game.findOne({ chat_id: body.message.chat.id })
        .select("settings")
        .exec((err, game) => {
          if (err) return bot.notifyAdmin(`New Participant Error:\n${err}`);
          if (game && game.settings.intro) {
            bot.queueMessage(
              body.message.chat.id,
              i18n(game.settings.language, "sentences.introduction", {
                name: body.message.new_chat_participant.first_name,
              })
            );
          }
        });
      return res.sendStatus(200);
    } else if (body.message.group_chat_created) {
      msg = {
        id: body.message.chat.id,
        from: body.from,
        command: "/info",
        chat: body.message.chat,
      };
    } else if (body.message.left_chat_participant) {
      Game.findOne({ chat_id: body.message.chat.id }).exec((err, game) => {
        if (err) return console.error(err);
        if (!game) return;
        Player.findOne({ game: game._id, id: `${body.message.left_chat_participant.id}` }).exec((err, player) => {
          if (err || !player) return;
          if (player) {
            player.present = false;
            player.save();
          }
        });
      });
      return res.sendStatus(200);
    } else if (
      body.edited_message ||
      body.update_id ||
      body.message.from.is_bot ||
      body.message.game ||
      body.message.photo ||
      body.message.video ||
      body.message.audio ||
      body.message.video_note ||
      body.message.emoji ||
      body.message.voice ||
      body.message.animation ||
      body.message.sticker ||
      body.message.reply_to_message ||
      body.message.migrate_to_chat_id ||
      body.message.pinned_message ||
      body.message.new_chat_title ||
      body.message.new_chat_photo ||
      body.message.document
    ) {
      //Ignore these messages as they're just chat interactions
      //console.log('Ignoring this message:');
      //console.log(body.message);
      return res.sendStatus(200);
    } else {
      msg = {
        id: config.masterChat,
        from: { first_name: "Bot Error" },
        command: "/error",
        text: JSON.stringify(body),
        chat: { id: config.masterChat },
      };
    }
  } else {
    msg = {
      id: body.message.message_id,
      from: body.message.from,
      command: body.message.text.substring(
        0,
        !body.message.text.includes(" ") ? body.message.text.length : body.message.text.indexOf(" ")
      ),
      text: body.message.text,
      chat: body.message.chat,
    };
  }
  if (msg.command.includes("@") && msg.command.substring(msg.command.indexOf("@") + 1) !== "TenThings_Bot") {
    return res.sendStatus(200);
  }
  try {
    if (!msg.from || !msg.from.id) {
      return res.sendStatus(200);
    }
  } catch (e) {
    console.error(e);
    bot.notifyAdmin(`Can't send message:\n${JSON.stringify(msg)}`);
    return res.sendStatus(200);
  }
  const existingGame = await Game.findOne({ chat_id: msg.chat.id })
    .populate("list.creator")
    .select("-playedLists")
    .exec();
  try {
    if (!existingGame) {
      const newGame = await maingame.create(msg.chat.id);
      console.log(`New game created for ${msg.chat.id}`);
      await commands.evaluate(msg, newGame, true);
    } else {
      if (msg.command.includes("@")) {
        msg.command = msg.command.substring(0, msg.command.indexOf("@"));
        if (!existingGame.enabled && !["/list", "/start"].includes(msg.command.toLowerCase())) {
          bot.sendMessage(msg.chat.id, i18n(existingGame.settings.language, "sentences.inactivity"));
          return res.sendStatus(200);
        }
      }
      await commands.evaluate(msg, existingGame, false);
    }
  } catch (e) {
    console.error(e);
    bot.sendMessage(msg.chat.id, "<b>Error</b>\nUse the /error command to explain to the admins what didn't work");
    bot.notifyAdmin(`Error in game ${msg.chat.id}:\n${e}`);
  } finally {
    res.sendStatus(200);
  }
});

router.get("/", ({ query }, res, next) => {
  if (query["hub.verify_token"] === config.tokens.facebook.tenthings) {
    res.status(200).send(query["hub.challenge"]);
  } else {
    res.sendStatus(200);
  }
});

/*
 ██     ██ ███████ ██████  ██   ██  ██████   ██████  ██   ██ 
 ██     ██ ██      ██   ██ ██   ██ ██    ██ ██    ██ ██  ██  
 ██  █  ██ █████   ██████  ███████ ██    ██ ██    ██ █████   
 ██ ███ ██ ██      ██   ██ ██   ██ ██    ██ ██    ██ ██  ██  
  ███ ███  ███████ ██████  ██   ██  ██████   ██████  ██   ██ 
*/
// Creates the endpoint for our webhook
router.post("/webhook", (req, res) => {
  const body = req.body;
  if (body.object === "page") {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(({ messaging }) => {
      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      const webhook_event = messaging[0];
      console.log(webhook_event);
      // Get the sender PSID
      const sender_psid = webhook_event.sender.id;
      console.log(`Sender PSID: ${sender_psid}`);
      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        console.log(webhook_event.message);
      } else if (webhook_event.postback) {
        console.log(webhook_event.postback);
      }
    });
    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Returns a '404 Not Found' if event is not = require(a page subscription
    res.sendStatus(404);
  }
});

function countBytes(s) {
  console.log(encodeURI(s).split(/%..|./).length - 1);
}

router.get("/queue", async (req, res, next) => {
  res.json(await queue.get());
});

module.exports = router;

const floodChecker = async () => {
  const webhook = await bot.getWebhook();
  return webhook.pending_update_count > 500;
};

const newPlayerError = (err) => {
  bot.notifyAdmin("Can't add new player: " + JSON.stringify(err));
  console.error(err);
};

/*
request(`https://api.themoviedb.org/3/search/movie?api_key=${moviedbAPIKey}&query=${encodeURIComponent('good will hunting')}`, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(response.body).results[0]);
  }
});*/
