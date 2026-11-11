import bot from "@root/connections/telegram";
import { getEngineQueueCount } from "@tenthings/engine/queue";

export const getQueue = async () => {
  const engineCount = await getEngineQueueCount();
  const outgoing = await bot.getQueueCount();
  const webhook = await bot.getWebhook();
  let message = `<b>Queue</b>\n`;
  message += `${engineCount} answers and actions queued\n`;
  message += `${outgoing} outgoing messages queued (max 25/sec)\n`;
  message += `${webhook.pending_update_count ?? 0} incoming messages pending in Telegram (max 100/sec)`;
  return message;
};
