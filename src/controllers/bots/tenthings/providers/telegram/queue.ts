import bot from "@root/connections/telegram";
import { getCount } from "@tenthings/guesses";

export const getQueue = async () => {
  const guessCount = await getCount();
  const outgoing = await bot.getQueueCount();
  const webhook = await bot.getWebhook();
  let message = `<b>Queue</b>\n`;
  message += `${guessCount} correct answers queued\n`;
  message += `${outgoing} outgoing messages queued (max 25/sec)\n`;
  message += `${webhook.pending_update_count ?? 0} incoming messages pending in Telegram (max 100/sec)`;
  return message;
};
