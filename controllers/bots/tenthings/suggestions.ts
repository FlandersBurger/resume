import { HydratedDocument } from "mongoose";
import { IPlayer } from "../../../models/tenthings/player";
import { IMessage } from "./main";
import { capitalize } from "../../../utils/string-helpers";

const bot = require("../../../connections/telegram");

export const sendSuggestion = async (
  type: string,
  msg: IMessage,
  player: HydratedDocument<IPlayer>,
  extraText = ""
) => {
  const suggestion = msg.text.substring(msg.command.length + 1, msg.text.length);
  if (suggestion && suggestion != "TenThings_Bot" && suggestion != "@TenThings_Bot") {
    player.suggestions++;
    await player.save();
    let message = `<b>${capitalize(type)}</b>\n${suggestion}${extraText}\n<i>${
      player.username ? `@${player.username}` : player.first_name
    }</i>`;
    bot.notify(message);
    const chatLink = await bot.getChat(msg.chat.id);
    message += chatLink ? `\n${chatLink}` : "";
    bot.notifyAdmins(message);
    message = `<b>${capitalize(type)}</b>\n<i>${suggestion}</i>\nThank you, ${
      player.username ? `@${player.username}` : player.first_name
    }`;
    bot.queueMessage(msg.chat.id, message);
  } else {
    bot.queueMessage(msg.chat.id, `You didn't add a feature ${player.first_name}. Add your message after /feature`);
  }
};
