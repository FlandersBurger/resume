import bot from "@/connections/telegram";
import { getCount } from "./guesses";

export const getQueue = async () => {
  const guessCount = await getCount();
  const outgoing = await bot.getQueueCount();
  const { pending_update_count } = await bot.getWebhook();
  let message = `<b>Queue</b>\n`;
  message += `${guessCount} correct answers queued\n`;
  message += `${outgoing} outgoing messages queued (max 30/sec)\n`;
  message += `${pending_update_count} incoming messages pending in Telegram (max 100/sec)`;
  return message;
};
