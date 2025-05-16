import { Router, Request, Response } from "express";
import moment from "moment";
import { Game, Player } from "@models/index";
import { activate, createMaingame, newRound } from "@tenthings/maingame";

import bot from "@root/connections/telegram";
import { getQueue } from "@tenthings/providers/telegram/queue";
import callbacks, { TelegramCallbackData } from "@tenthings/providers/telegram/callbacks";
import { evaluate } from "@tenthings/providers/telegram/commands";
import { TelegramMessage } from "@tenthings/providers/telegram";

// DO NOT REMOVE jobs
import jobs from "@tenthings/jobs";

console.log(
  `Scheduled Jobs:\n${jobs
    .map((j) => ` - ${j.name}: ${moment.duration(moment(new Date()).diff(j.nextInvocation())).humanize(true)}`)
    .join("\n")}`,
);

export enum TelegramMessageType {
  Callback = "callback",
  Command = "command",
  NewGame = "newGame",
  PlayerLeft = "playerLeft",
  Message = "message",
  Ignore = "ignore",
}

//-------------//
//redis.set('pause', true);
//-------------//

export const tenthingsTelegramBotRoute = Router();

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
tenthingsTelegramBotRoute.post("/", async (req: Request, res: Response) => {
  const domainMessage = await bot.toDomainMessage(req.body);
  switch (domainMessage.messageType) {
    case TelegramMessageType.Ignore:
      res.sendStatus(200);
      return;
    case TelegramMessageType.Callback:
      await callbacks(domainMessage.message as TelegramCallbackData);
      res.sendStatus(200);
      return;
    case TelegramMessageType.PlayerLeft:
      const game = await Game.findOne({ chat_id: domainMessage.message!.chatId });
      if (game) {
        const player = await Player.findOne({ game: game._id, id: `${domainMessage.message!.from.id}` });
        if (player) {
          player.present = false;
          player.save();
        }
      }
      res.sendStatus(200);
      return;
    default:
      break;
  }
  let msg: TelegramMessage = domainMessage.message as TelegramMessage;
  if (!msg?.from?.id) {
    if (!res.headersSent) res.sendStatus(200);
  } else {
    const existingGame = await Game.findOne({ chat_id: msg.chatId })
      .populate("list.creator")
      .populate("list.values.guesser")
      .select("-playedLists")
      .exec();

    if (!existingGame) {
      const newGame = await createMaingame({ chat_id: msg.chatId, platform: "telegram" });
      console.log(`New game created for ${msg.chatId}`);
      await evaluate(msg, newGame, true);
    } else {
      if (!existingGame.enabled) {
        if (msg.command && ["list", "start", "minigame", "tinygame"].includes(msg.command)) {
          await activate(existingGame, true);
          await evaluate(msg, existingGame, false);
        }
      } else {
        try {
          await existingGame.validate();
        } catch (err) {
          console.log("Attemtping to reset game:", existingGame._id);
          console.error(err);
          existingGame.streak = {
            player: undefined,
            count: 0,
          };
          await newRound(existingGame);
          if (!res.headersSent) res.sendStatus(200);
          return;
        }
        await evaluate(msg, existingGame, false);
      }
    }
    if (!res.headersSent) res.sendStatus(200);
  }
});

tenthingsTelegramBotRoute.get("/", (req: Request, res: Response) => {
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
tenthingsTelegramBotRoute.post("/webhook", (req: Request, res: Response) => {
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
    // Returns a '404 Not Found' if event is not a page subscription
    res.sendStatus(404);
  }
});

tenthingsTelegramBotRoute.get("/queue", async (_: Request, res: Response) => {
  res.json(await getQueue());
});
