import moment from "moment";
import find from "lodash/find";
import { Game, List } from "@models/index";
import { IVote } from "@models/tenthings/list";
import { getListScore } from "@tenthings/lists";
import { votersCache } from "@tenthings/cache";
import { parseSymbols } from "@utils/string-helpers";
import { makePercentage } from "@root/utils/number-helpers";
import { convertDiscordUserToPlayer } from ".";
import bot, { DiscordButtonInteraction } from "@root/connections/discord";
import i18n from "@root/i18n";

export default async (interaction: DiscordButtonInteraction) => {
  const game = await Game.findOne({ discordChannelId: interaction.channelId });
  if (!game) return;

  const [type, ...rest] = interaction.customId.split(":");

  switch (type) {
    case "vote": {
      const [voteString, listId] = rest;
      const vote = parseInt(voteString);

      let doVote = false;
      if (votersCache[interaction.userId]) {
        if (
          votersCache[interaction.userId].lastVoted <
          moment().subtract(votersCache[interaction.userId].delay, "seconds")
        ) {
          doVote = true;
          delete votersCache[interaction.userId];
        }
      } else {
        votersCache[interaction.userId] = { lastVoted: moment(), delay: 10 };
        doVote = true;
      }

      if (!doVote) break;

      const foundList = await List.findOne({ _id: listId }).select("name votes modifyDate score skips plays").exec();
      if (!foundList) break;

      let voter = find(foundList.votes, (v: IVote) => v.voter == interaction.userId);
      if (!voter) {
        foundList.votes.push({ voter: interaction.userId, vote, date: new Date(), modifyDate: new Date() });
      } else {
        voter.vote = vote;
        voter.modifyDate = new Date();
      }
      foundList.score = getListScore(foundList);
      delete (foundList as any).voters;
      await foundList.save();

      const player = await convertDiscordUserToPlayer(game, {
        id: interaction.userId,
        username: interaction.username,
        displayName: interaction.displayName,
        bot: false,
      });
      const playerName = player?.first_name || interaction.displayName;

      bot.queueMessage(
        game.discordChannel,
        i18n(game.settings.language, `sentences.${vote > 0 ? "" : "dis"}likesList`, {
          name: playerName,
          list: parseSymbols(foundList.name),
          score: makePercentage(foundList.score),
        }),
      );
      break;
    }
  }
};
