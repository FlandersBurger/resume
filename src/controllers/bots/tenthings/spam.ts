import moment from "moment";
import { IMessage } from "./messages";

import bot from "@root/connections/telegram";
import { angleBrackets } from "@root/utils/string-helpers";

const cache: {
  [key: string]: {
    count: number;
    lastMessage: moment.Moment;
  };
} = {};

export const checkSpam = (body: {
  message?: IMessage;
  callback_query?: { from: IMessage["from"]; message: IMessage };
}) => {
  const from = body.message ? body.message.from.id : body.callback_query!.from.id;
  const name = angleBrackets(body.message ? body.message.from.first_name : body.callback_query!.from.first_name);
  const chat = body.message ? body.message.chatId : body.callback_query!.message.chatId;

  if (cache[from]) {
    if (cache[from].lastMessage < moment().subtract(10, "seconds")) {
      delete cache[from];
    } else if (cache[from].lastMessage > moment()) {
      cache[from].count++;
      cache[from].lastMessage = moment().add(10, "seconds");
      return true;
    } else if (cache[from].count <= 30) {
      cache[from].count++;
      if (cache[from].count === 20) {
        bot.queueMessage(chat, `You sure seem to be sending a lot of messages, ${name}. I'm keeping an eye on you`);
      } else if (cache[from].count === 30) {
        cache[from].lastMessage = moment();
        bot.queueMessage(
          chat,
          `Ok, ${name}, calm down, I can't keep up.  Please stay silent for 10 seconds so I can process your stuff`,
        );
      }
    } else if (cache[from].count > 35) {
      cache[from].count++;
      if (cache[from].count === 35) {
        bot.exportChatInviteLink(chat).then((url: string | undefined) => {
          bot.notifyAdmin(
            `Possible spammer: ${name} (${from}) in chat ${chat} ${
              chat == parseInt(process.env.GROUP_CHAT || "") ? " - The main chat!" : ""
            }\n\n${body.message}\n\nURL: ${url ? url : "N/A"}`,
          );
        });
        /*
                } else if (cache[from].count % 10 === 0) {
                  bot.notifyAdmin(`Possible spammer: ${name} (${from}) -> ${cache[from].count} messages`);*/
      }
      cache[from].lastMessage = moment();
      return true;
    } else {
      return true;
    }
  } else {
    cache[from] = {
      lastMessage: moment(),
      count: 1,
    };
  }
  return false;
};
