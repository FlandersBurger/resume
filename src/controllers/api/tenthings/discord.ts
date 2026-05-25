import { Game } from "@models/index";
import { activate, createMaingame, newRound } from "@tenthings/maingame";

import discordBot, { DiscordMessage } from "@root/connections/discord";
import { Command, evaluate, translateCommand } from "@tenthings/providers/discord/commands";

export const initDiscordBot = () => {
  discordBot.onMessage(async (msg: DiscordMessage) => {
    if (!msg.from?.id) return;

    const existingGame = await Game.findOne({ discordChannelId: msg.channelId })
      .populate("list.creator")
      .populate("list.values.guesser")
      .select("-playedLists")
      .exec();

    if (!existingGame) {
      const newGame = await createMaingame({ chat_id: 0, discordChannelId: msg.channelId, platform: "discord" });
      console.log(`New Discord game created for channel ${msg.channelId}`);
      await evaluate(msg, newGame, true);
    } else {
      if (!existingGame.enabled) {
        if (msg.command) {
          const command = translateCommand(existingGame.settings.language, msg.command);
          if (
            (command &&
              [Command.List, Command.Start, Command.Minigame, Command.Tinygame, Command.Hint, Command.Skip].includes(
                command,
              )) ||
            ["list", "start", "minigame", "tinygame", "hint", "skip"].includes(msg.command)
          ) {
            await activate(existingGame, true);
            await evaluate(msg, existingGame, false);
          }
        }
      } else {
        try {
          await existingGame.validate();
        } catch (err) {
          console.log("Attempting to reset Discord game:", existingGame._id);
          console.error(err);
          existingGame.streak = {
            player: undefined,
            count: 0,
          };
          await newRound(existingGame);
          return;
        }
        await evaluate(msg, existingGame, false);
      }
    }
  });
};
