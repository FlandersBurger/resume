const bot = require("../../../connections/telegram");

const guesses = require("./guesses");

exports.get = async () => {
  const count = await guesses.getCount();
  const outgoing = await bot.getQueue();
  const webhook = await bot.getWebhook();
  let message = `<b>Queue</b>\n`;
  message += `${count} correct answers queued\n`;
  message += `${outgoing} outgoing messages queued (max 30/sec)\n`;
  message += `${webhook.pending_update_count} incoming messages pending in Telegram (max 100/sec)`;
  return message;
};
