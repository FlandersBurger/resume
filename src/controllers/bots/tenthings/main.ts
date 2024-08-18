import { Router, Request, Response } from "express";
import moment from "moment";
import { Game, Player } from "@models/index";
import { activate, createMaingame } from "./maingame";

import bot from "@root/connections/telegram";
import { getQueue } from "./queue";
import callbacks, { ICallbackData } from "./callbacks";
import { evaluate } from "./commands";
import { IMessage } from "./messages";

// DO NOT REMOVE jobs
import jobs from "./jobs";
console.log(
  `Scheduled Jobs:\n${jobs
    .map((j) => ` - ${j.name}: ${moment.duration(moment(new Date()).diff(j.nextInvocation())).humanize(true)}`)
    .join("\n")}`,
);

export enum MessageType {
  Callback = "callback",
  Command = "command",
  NewGame = "newGame",
  PlayerLeft = "playerLeft",
  Message = "message",
  Ignore = "ignore",
  Reply = "reply",
}

//-------------//
//redis.set('pause', true);
//-------------//

export const tenthingsBotRoute = Router();

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
  bot.getChatMember(parseInt(process.env.GROUP_CHAT || ""), parseInt(process.env.MASTER_CHAT || ""))
  .then(function(present) {
    console.log(present);
  });*/

//bot.queueMessage('-1001394022777', "test<a href=\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Regular_Hexagon_Inscribed_in_a_Circle.gif/360px-Regular_Hexagon_Inscribed_in_a_Circle.gif\'>&#8204;</a>\nsome other stuff")
//var url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
//bot.queueMessage(parseInt(process.env.MASTER_CHAT || ""), "test<a href=\'" + url + "\'>&#8204;</a>\nsome other stuff");
//bot.queueMessage(parseInt(process.env.MASTER_CHAT || ""), JSON.stringify(msg));
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
tenthingsBotRoute.post("/", async (req: Request, res: Response) => {
  const domainMessage = await bot.toDomainMessage(req.body);
  switch (domainMessage.messageType) {
    case MessageType.Ignore:
      res.sendStatus(200);
      break;
    case MessageType.Callback:
      await callbacks(domainMessage.message as ICallbackData);
      res.sendStatus(200);
      break;
    case MessageType.PlayerLeft:
      const game = await Game.findOne({ chat_id: domainMessage.message!.chatId });
      if (game) {
        const player = await Player.findOne({ game: game._id, id: `${domainMessage.message!.from.id}` });
        if (player) {
          player.present = false;
          player.save();
        }
      }
      res.sendStatus(200);
      break;
    case MessageType.Reply:
      console.log(domainMessage);
    default:
      break;
  }
  let msg: IMessage = domainMessage.message as IMessage;
  if (!msg?.from?.id) {
    if (!res.headersSent) res.sendStatus(200);
  } else {
    const existingGame = await Game.findOne({ chat_id: msg.chatId })
      .populate("list.creator")
      .select("-playedLists")
      .exec();

    if (!existingGame) {
      const newGame = await createMaingame(msg.chatId, msg.topicId);
      console.log(`New game created for ${msg.chatId}`);
      await evaluate(msg, newGame, true);
    } else {
      if (msg.topicId && msg.topicId !== existingGame.topicId) {
        existingGame.topicId = msg.topicId;
      }
      if (!existingGame.enabled) {
        if (msg.command && ["/list", "/start", "/minigame", "/tinygame"].includes(msg.command.toLowerCase())) {
          await activate(existingGame, true);
          await evaluate(msg, existingGame, false);
        }
      } else {
        await evaluate(msg, existingGame, false);
      }
    }
    if (!res.headersSent) res.sendStatus(200);
  }
});

tenthingsBotRoute.get("/", (req: Request, res: Response) => {
  if (req.query["hub.verify_token"] === process.env.FACEBOOK_TOKEN) {
    res.status(200).send(req.query["hub.challenge"]);
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
tenthingsBotRoute.post("/webhook", (req: Request, res: Response) => {
  const body = req.body;
  if (body.object === "page") {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(({ messaging }: any) => {
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

tenthingsBotRoute.get("/queue", async (_: Request, res: Response) => {
  res.json(await getQueue());
});
