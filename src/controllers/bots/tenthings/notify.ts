import bot from "@root/connections/telegram";

export const notifyAdmin = (message: string) => bot.notifyAdmin(message);
