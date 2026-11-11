import { Game } from "@models/index";
import { activate, createMaingame } from "@tenthings/maingame";
import { SYSTEM_ACTOR } from "@tenthings/engine/actions";
import { dispatch } from "@tenthings/engine/queue";

import discordBot, { DiscordMessage } from "@root/connections/discord";
import { Command, evaluate, translateCommand } from "@tenthings/providers/discord/commands";
import handleButton from "@tenthings/providers/discord/callbacks";

export const initDiscordBot = () => {
  discordBot.onButton(handleButton);

  discordBot.onMessage(async (msg: DiscordMessage) => {
    if (!msg.from?.id) return;

    const existingGame = await Game.findOne({ discordChannelId: msg.channelId })
      .populate("list.creator")
      .populate("list.values.guesser")
      .exec();

    if (!existingGame) {
      const newGame = await createMaingame({ discordChannelId: msg.channelId, platform: "discord" });
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
          dispatch({ type: "startRound", gameId: String(existingGame._id), actor: SYSTEM_ACTOR, replace: true });
          return;
        }
        await evaluate(msg, existingGame, false);
      }
    }
  });
};
