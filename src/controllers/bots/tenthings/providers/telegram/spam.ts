import moment from "moment";

import bot, { TelegramUser } from "@root/connections/telegram";

const cache: {
  [key: string]: {
    count: number;
    lastMessage: moment.Moment;
  };
} = {};

// Purge entries that have been idle for over a minute so the object doesn't
// accumulate one entry per unique Telegram user ID indefinitely.
setInterval(() => {
  const cutoff = moment().subtract(1, "minute");
  for (const key of Object.keys(cache)) {
    if (cache[key].lastMessage.isBefore(cutoff)) {
      delete cache[key];
    }
  }
}, 60_000);

/** The raw Telegram update, before toDomainMessage: the chat sits at `message.chat.id`. */
type RawMessage = { from: TelegramUser; chat: { id: number }; message_thread_id?: number };

/** True when the sender is flooding and the update should be ignored. Warns them in the chat at 20 and 30. */
export const checkSpam = (body: {
  message?: RawMessage;
  callback_query?: { from: TelegramUser; message: RawMessage };
}) => {
  const sender = body.message?.from ?? body.callback_query!.from;
  const message = body.message ?? body.callback_query!.message;
  const from = sender.id;
  const name = sender.username ? `@${sender.username}` : sender.first_name;
  const channel = { chat: message.chat.id, topic: message.message_thread_id };

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
        bot.queueMessage(channel, `You sure seem to be sending a lot of messages, ${name}. I'm keeping an eye on you`);
      } else if (cache[from].count === 30) {
        cache[from].lastMessage = moment();
        bot.queueMessage(
          channel,
          `Ok, ${name}, calm down, I can't keep up.  Please stay silent for 10 seconds so I can process your stuff`,
        );
      }
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
