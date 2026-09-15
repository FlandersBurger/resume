/*jslint esversion: 10*/
import schedule, { Job } from "node-schedule";
import moment from "moment";
import bot, { Channel } from "@root/connections/telegram";
import minBy from "lodash/minBy";
import maxBy from "lodash/maxBy";
import max from "lodash/max";
import uniqBy from "lodash/uniqBy";
import uniq from "lodash/uniq";
import { deactivate } from "./maingame";
import { IGame } from "@models/tenthings/game";
import { makeReadable } from "@root/utils/number-helpers";
import { HydratedDocument, Types } from "mongoose";
import { IPlayer } from "@models/tenthings/player";
import { IStats } from "@models/tenthings/stats";
import { updateMinigames } from "./minigame";
import { SupportedLanguage } from "./languages";
import { Game, GameRound, Player, Stats, List } from "@models/index";
import i18n from "@root/i18n";
import { getFrequencyMessage } from "./messages";
import { capitalize } from "@utils/string-helpers";

// ██████  ███████ ███████ ███████ ████████     ██████   █████  ██ ██      ██    ██     ███████  ██████  ██████  ██████  ███████
// ██   ██ ██      ██      ██         ██        ██   ██ ██   ██ ██ ██       ██  ██      ██      ██      ██    ██ ██   ██ ██
// ██████  █████   ███████ █████      ██        ██   ██ ███████ ██ ██        ████       ███████ ██      ██    ██ ██████  █████
// ██   ██ ██           ██ ██         ██        ██   ██ ██   ██ ██ ██         ██             ██ ██      ██    ██ ██   ██ ██
// ██   ██ ███████ ███████ ███████    ██        ██████  ██   ██ ██ ███████    ██        ███████  ██████  ██████  ██   ██ ███████

const resetDailyScore = () => {
  if (moment().utc().hour() === 1) {
    bot.notifyAdmin(`Score Reset Triggered; ${moment().format("DD-MMM-YYYY hh:mm")}`);
    Game.find({
      lastPlayDate: { $gte: moment().subtract(1, "days") },
    })
      .select("telegramChatId telegramTopicId telegramChannel list date hints")
      .populate("list.creator")
      .populate("list.values.guesser")
      .then(
        async (games: HydratedDocument<IGame>[]) => {
          const dailyPlayers: IPlayer[] = await Player.find({
            scoreDaily: { $gt: 0 },
            lastPlayDate: { $gte: moment().subtract(1, "days") },
          })
            .lean()
            .select("_id id")
            .exec();
          for (let game of games) {
            const players: IPlayer[] = await Player.find({
              game: game._id,
              scoreDaily: { $gt: 0 },
              lastPlayDate: { $gte: moment().subtract(1, "days") },
            })
              .select("_id id scoreDaily first_name username")
              .exec();
            const highScore = players.reduce((highScore, { scoreDaily }) => max([highScore, scoreDaily]) as number, 0);
            let winners = players.filter((player) => player.scoreDaily === highScore);
            await game.provider.endOfDay(game, winners, highScore);
            await Player.updateMany({ game: game._id, scoreDaily: 0 }, { $set: { playStreak: 0 } });
            await Player.updateMany(
              {
                game: game._id,
                _id: { $in: winners.map((winner) => winner._id) },
              },
              { $inc: { wins: 1 } },
            ).exec();
            await Player.updateMany(
              { game: game._id, scoreDaily: { $gt: 0 } },
              {
                $inc: { plays: 1, playStreak: 1 },
                $set: { scoreDaily: 0 },
              },
            ).exec();
            if (game.hints < 4) {
              game.hints = 4;
            }
            game.provider.mainGameMessage(game);
            game.save();
          }
          try {
            updateDailyStats(games, dailyPlayers.length, uniqBy(dailyPlayers, (player) => player.id).length);
          } catch (error) {
            if (error) return bot.notifyAdmin(`Daily stat update issue\n${error}`);
          }
        },
        (err: Error) => {
          console.error(err);
          bot.notifyAdmin(`Update daily score error\n${err}`);
        },
      );
  } else {
    bot.notifyAdmin(`Schedule incorrectly triggered: ${moment().format("DD-MMM-YYYY hh:mm")}`);
  }
};

/*
Stats.find()
  .lean()
  .then(stats => {
    console.log(stats.forEach(stat => console.log(stat.date)));
  });*/
const getYearlyStats = async (): Promise<{ min: any; max: any }> => {
  const yearStats = (await Stats.find({ base: false, uniquePlayers: { $gt: 0 } }).select("date uniquePlayers")).filter(
    ({ date }: IStats) => moment(date) >= moment().subtract(1, "years"),
  );
  return {
    min: minBy(yearStats, (stat) => stat.uniquePlayers),
    max: maxBy(yearStats, (stat) => stat.uniquePlayers),
  };
};

// ██████   █████  ██ ██      ██    ██     ███████ ████████  █████  ████████ ███████
// ██   ██ ██   ██ ██ ██       ██  ██      ██         ██    ██   ██    ██    ██
// ██   ██ ███████ ██ ██        ████       ███████    ██    ███████    ██    ███████
// ██   ██ ██   ██ ██ ██         ██             ██    ██    ██   ██    ██         ██
// ██████  ██   ██ ██ ███████    ██        ███████    ██    ██   ██    ██    ███████

const updateDailyStats = async (games: IGame[], totalPlayers: number, uniquePlayers: number) => {
  let base = await Stats.findOne({ base: true }).exec();
  if (!base) return bot.notifyAdmin(`Daily stat update failed: base not found`);
  const yearStats = await getYearlyStats();
  const listStats = await List.aggregate([
    {
      $project: {
        _id: 1,
        plays: 1,
        votes: { $size: { $ifNull: ["$votes", []] } },
      },
    },
    {
      $group: {
        _id: "total",
        plays: { $sum: "$plays" },
        votes: { $sum: "$votes" },
      },
    },
  ]).exec();
  const playerStats = await Player.aggregate([
    {
      $group: {
        _id: "total",
        hints: { $sum: "$hints" },
        score: { $sum: "$score" },
        highScore: { $max: "$scoreDaily" },
        scoreDaily: { $sum: "$scoreDaily" },
        answers: { $sum: "$answers" },
        snubs: { $sum: "$snubs" },
        skips: { $sum: "$skips" },
        suggestions: { $sum: "$suggestions" },
        searches: { $sum: "$searches" },
        minigamePlays: { $sum: "$minigamePlays" },
        tinygamePlays: { $sum: "$tinygamePlays" },
      },
    },
  ]).exec();
  const newGamesCount = games.filter((game: IGame) => game.date >= moment().subtract(1, "days").toDate()).length;
  let message = `${games.length} games played today\n`;
  message += `${newGamesCount} new games started\n`;
  message += `${uniquePlayers} unique of ${totalPlayers} players\n`;
  message += `52W high unique: ${yearStats.max.uniquePlayers} on ${moment(yearStats.max.date).format("DD-MMM-YYYY")}\n`;
  message += `52W low unique: ${yearStats.min.uniquePlayers} on ${moment(yearStats.min.date).format("DD-MMM-YYYY")}\n`;
  message += `${makeReadable(listStats[0].plays - base.listsPlayed)} lists played\n`;
  message += `${makeReadable(listStats[0].votes - base.votes)} list votes given\n`;
  message += `High score ${makeReadable(playerStats[0].highScore)}\n`;
  // message += `${makeReadable(playerStats[0].skips - base.skips)} lists skipped\n`;
  // message += `${makeReadable(playerStats[0].answers - base.answers)} answers given\n`;
  // message += `${makeReadable(playerStats[0].snubs - base.snubs)} answers snubbed\n`;
  // message += `${makeReadable(playerStats[0].minigamePlays - base.minigamePlays)} minigame answers given\n`;
  // message += `${makeReadable(playerStats[0].tinygamePlays - base.tinygamePlays)} tinygame answers given\n`;
  // message += `${makeReadable(playerStats[0].hints - base.hints)} hints asked\n`;
  // message += `${makeReadable(playerStats[0].score - base.score)} points scored overall\n`;
  // message += `${makeReadable(playerStats[0].suggestions - base.suggestions)} suggestions given\n`;
  // message += `${makeReadable(playerStats[0].searches - base.searches)} lists searched\n`;
  bot.notifyAdmins(message);
  bot.notifyAdmin(message);
  bot.notifyCosmicForce(message);
  const dailyStats = new Stats({
    hints: playerStats[0].hints - base.hints,
    chats: games.length,
    listsPlayed: listStats[0].plays - base.listsPlayed,
    totalPlayers: totalPlayers,
    uniquePlayers: uniquePlayers,
    score: playerStats[0].score - base.score,
    highScore: playerStats[0].highScore,
    answers: playerStats[0].answers - base.answers,
    snubs: playerStats[0].snubs - base.snubs,
    skips: playerStats[0].skips - base.skips,
    suggestions: playerStats[0].suggestions - base.suggestions,
    searches: playerStats[0].searches - base.searches,
    votes: listStats[0].votes - base.votes,
    minigamePlays: playerStats[0].minigamePlays - base.minigamePlays,
    tinygamePlays: playerStats[0].tinygamePlays - base.tinygamePlays,
  });
  try {
    await dailyStats.save();
    base.listsPlayed = listStats[0].plays;
    base.votes = listStats[0].votes;
    base.hints = playerStats[0].hints;
    base.score = playerStats[0].score;
    base.answers = playerStats[0].answers;
    base.snubs = playerStats[0].snubs;
    base.skips = playerStats[0].skips;
    base.suggestions = playerStats[0].suggestions;
    base.searches = playerStats[0].searches;
    base.minigamePlays = playerStats[0].minigamePlays;
    base.tinygamePlays = playerStats[0].tinygamePlays;
    await base.save();
    bot.notifyAdmin("Daily & Base Stats Updated!");
  } catch (error) {
    bot.notifyAdmin(`Daily stat save issue\n${error}`);
  }
};

/*
  const game = new Stats({
    base: true,
    hints: 154486,
    cycles: 34,
    chats: 31,
    totalPlayers: 186,
    uniquePlayers: 158,
    score: 2438628,
    snubs: 51670,
    skips: 50024,
    suggestions: 719,
  });
  game.save(err => {
    if (err) return console.error(err);
    console.log('Game Saved!');
  });
*/

/*
  const getJoke = schedule.scheduleJob('0 0 0 * * *', () => {
    request({
      method: 'GET',
      url: 'https://webknox-jokes.p.rapidapi.com/jokes/random',
      qs: {minRating: '7'},
      headers: {
        'X-RapidAPI-Host': 'webknox-jokes.p.rapidapi.com' ,
        'X-RapidAPI-Key': process.env.RAPID_API_TOKEN
      }
    }, (err, response, body) => {
      const joke = JSON.parse(body);
      Joke.findOne({
        joke: joke.joke
      }).exec((err, existingJoke) => {
        bot.notifyAdmin(joke.joke);
        if (!existingJoke) {
          const newJoke = new Joke(joke);
          newJoke.save(err => {
            if (err) return console.error(err);
            console.log('Joke saved!');
          });
        }
      });
    });
  });
  */

// ██      ██ ███████ ████████     ██    ██ ██████  ██████   █████  ████████ ███████ ███████
// ██      ██ ██         ██        ██    ██ ██   ██ ██   ██ ██   ██    ██    ██      ██
// ██      ██ ███████    ██        ██    ██ ██████  ██   ██ ███████    ██    █████   ███████
// ██      ██      ██    ██        ██    ██ ██      ██   ██ ██   ██    ██    ██           ██
// ███████ ██ ███████    ██         ██████  ██      ██████  ██   ██    ██    ███████ ███████

// Combines the old separate "new lists" / "updated lists" notices into one message per game,
// and curates which lists get mentioned to the languages that game actually plays (game.settings.languages)
// instead of blasting every game with every list regardless of language.
const sendListUpdates = async () => {
  const yesterday = moment().subtract(1, "days");
  const lists = await List.find({
    $or: [{ date: { $gte: yesterday } }, { modifyDate: { $gte: yesterday }, date: { $lt: yesterday } }],
  })
    .select("name language date")
    .lean();
  if (lists.length === 0) return bot.notifyAdmin("No lists created or modified");

  const newLists = lists.filter(({ date }) => moment(date) >= yesterday);
  const updatedLists = lists.filter(({ date }) => moment(date) < yesterday);

  const games: HydratedDocument<IGame>[] = await Game.find({
    "settings.updates": true,
    platform: "telegram",
    enabled: true,
    listsPlayed: { $gt: 0 },
  }).select("telegramChatId telegramTopicId telegramChannel settings.languages settings.language");

  // Group games by their content-language set + UI language, so each distinct combination
  // gets one composed (and correctly translated) message instead of recomputing per game.
  const groups = new Map<string, { languages: string[]; uiLanguage: string; channels: Channel[] }>();
  for (const game of games) {
    const languages = game.settings.languages?.length ? game.settings.languages : [SupportedLanguage.EN];
    const uiLanguage = game.settings.language || SupportedLanguage.EN;
    const key = `${[...languages].sort().join(",")}|${uiLanguage}`;
    if (!groups.has(key)) groups.set(key, { languages, uiLanguage, channels: [] });
    groups.get(key)!.channels.push(game.telegramChannel);
  }

  let sentTo = 0;
  for (const { languages, uiLanguage, channels } of groups.values()) {
    const relevantNew = newLists.filter(({ language }) => languages.includes(language));
    const relevantUpdated = updatedLists.filter(({ language }) => languages.includes(language));
    if (relevantNew.length === 0 && relevantUpdated.length === 0) continue;

    let message = "";
    if (relevantNew.length > 0) {
      message += i18n(uiLanguage, "sentences.newListsHeading");
      relevantNew.forEach(({ name }) => (message += `\n- ${name}`));
    }
    if (relevantUpdated.length > 0) {
      if (message) message += "\n\n";
      message += i18n(uiLanguage, "sentences.updatedListsHeading");
      relevantUpdated.forEach(({ name }) => (message += `\n- ${name}`));
    }
    message += `\n\n<i>${i18n(uiLanguage, "sentences.listUpdatesOptOut")}</i>`;
    bot.broadcast(channels, message);
    sentTo += channels.length;
  }
  bot.notifyAdmin(`List update notice sent to ${sentTo} of ${games.length} eligible games`);
};

// ███████ ████████  █████  ██      ███████     ██      ██ ███████ ████████ ███████
// ██         ██    ██   ██ ██      ██          ██      ██ ██         ██    ██
// ███████    ██    ███████ ██      █████       ██      ██ ███████    ██    ███████
//      ██    ██    ██   ██ ██      ██          ██      ██      ██    ██         ██
// ███████    ██    ██   ██ ███████ ███████     ███████ ██ ███████    ██    ███████

// Small calendar of recurring award shows, so lists tagged with the matching award category
// can be called out right after the ceremony airs instead of waiting for them to age past
// their frequency cadence like everything else. Approximate air dates; the digest checks a
// window after each one so it doesn't need to be exact.
const AWARD_EVENTS: { name: string; month: number; day: number; categoryMatch: RegExp }[] = [
  { name: "Golden Globes", month: 0, day: 5, categoryMatch: /movies\.awards|television\.awards/ },
  { name: "Grammys", month: 1, day: 1, categoryMatch: /music\.awards/ },
  { name: "Oscars", month: 2, day: 10, categoryMatch: /movies\.awards/ },
  { name: "Emmys", month: 8, day: 15, categoryMatch: /television\.awards/ },
];
const AWARD_EVENT_WINDOW_DAYS = 21;

const isRecentAnnualDate = (month: number, day: number, windowDays: number): boolean => {
  const now = moment();
  const daysSince = now.diff(moment({ year: now.year(), month, day }), "days");
  return daysSince >= 0 && daysSince <= windowDays;
};

// Lists tagged "quarterly"/"annually" (frequency 0/1) that haven't been touched within their
// cadence. "rarely"/"never" (2/3) are excluded — they have no real cadence to enforce.
const STALE_CADENCE: Record<number, [number, moment.unitOfTime.DurationConstructor]> = {
  0: [3, "months"],
  1: [1, "years"],
};
const MAX_STALE_LISTS_PER_SECTION = 10;
const STALE_RENOTIFY_COOLDOWN_DAYS = 30;

// Surfaces a bounded, prioritized backlog of lists overdue for a refresh, plus a callout for
// any award lists whose ceremony just happened. Capped per section and re-notified only after
// a cooldown, so the digest reflects this week's new backlog rather than repeating (and growing
// with) everything that's ever gone stale.
const notifyStaleLists = async () => {
  const cooldownCutoff = moment().subtract(STALE_RENOTIFY_COOLDOWN_DAYS, "days").toDate();
  const notNotifiedRecently = {
    $or: [{ staleNotifiedDate: { $exists: false } }, { staleNotifiedDate: { $lt: cooldownCutoff } }],
  };

  const overdue = await List.find({
    enabled: true,
    $and: [
      notNotifiedRecently,
      {
        $or: Object.entries(STALE_CADENCE).map(([frequency, [amount, unit]]) => ({
          frequency: Number(frequency),
          modifyDate: { $lt: moment().subtract(amount, unit).toDate() },
        })),
      },
    ],
  })
    .select("name frequency plays modifyDate")
    .sort({ plays: -1 })
    .limit(MAX_STALE_LISTS_PER_SECTION)
    .lean();

  const dueEvents = AWARD_EVENTS.filter((event) => isRecentAnnualDate(event.month, event.day, AWARD_EVENT_WINDOW_DAYS));
  const eventSections: { eventName: string; lists: { _id: Types.ObjectId; name: string }[] }[] = [];
  for (const event of dueEvents) {
    const lists = await List.find({ enabled: true, categories: event.categoryMatch, ...notNotifiedRecently })
      .select("name")
      .sort({ plays: -1 })
      .limit(MAX_STALE_LISTS_PER_SECTION)
      .lean();
    if (lists.length > 0) eventSections.push({ eventName: event.name, lists });
  }

  // An overdue list already called out for an event this run doesn't need to also show up in
  // the generic backlog section.
  const eventListIds = new Set(eventSections.flatMap(({ lists }) => lists.map((list) => list._id.toString())));
  const dedupedOverdue = overdue.filter((list) => !eventListIds.has(list._id.toString()));

  if (dedupedOverdue.length === 0 && eventSections.length === 0) {
    return bot.notifyAdmin("Stale list digest: nothing new to review this week");
  }

  const listLink = (id: Types.ObjectId, name: string) =>
    `<a href="https://belgocanadian.com/tenthings?list=${id}">${name}</a>`;
  let message = "";
  eventSections.forEach(({ eventName, lists }) => {
    message += `🏆 <b>${eventName}</b> just happened, these could use fresh results:\n`;
    lists.forEach((list) => (message += `- ${listLink(list._id, list.name)}\n`));
    message += "\n";
  });
  if (dedupedOverdue.length > 0) {
    message += `📋 Due for a refresh:\n`;
    dedupedOverdue.forEach((list) => {
      message += `- ${listLink(list._id, list.name)} (${list.plays} plays, ${capitalize(getFrequencyMessage(list.frequency))})\n`;
    });
  }

  const notifiedIds = [
    ...dedupedOverdue.map((list) => list._id),
    ...eventSections.flatMap(({ lists }) => lists.map((list) => list._id)),
  ];
  await List.updateMany({ _id: { $in: notifiedIds } }, { $set: { staleNotifiedDate: new Date() } });
  bot.notifyAdmin(message.trim());
};

//bot.sendPhoto(parseInt(process.env.MASTER_CHAT || ""), 'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1._SX40_CR0,0,40,54_.jpg')

//var dailyScore = schedule.scheduleJob('*/10 * * * * *', function() {
//resetDailyScore()

// ███████ ████████  █████  ██      ███████      ██████   █████  ███    ███ ███████ ███████
// ██         ██    ██   ██ ██      ██          ██       ██   ██ ████  ████ ██      ██
// ███████    ██    ███████ ██      █████       ██   ███ ███████ ██ ████ ██ █████   ███████
//      ██    ██    ██   ██ ██      ██          ██    ██ ██   ██ ██  ██  ██ ██           ██
// ███████    ██    ██   ██ ███████ ███████      ██████  ██   ██ ██      ██ ███████ ███████

const deleteStaleGames = () => {
  Game.find({ lastPlayDate: { $lt: moment().subtract(12, "months") } })
    .select("_id")
    .then((staleGames: HydratedDocument<IGame>[]) => {
      staleGames.forEach(async (game) => {
        await Player.deleteMany({ game: game._id }).exec();
        await game.deleteOne();
      });
      if (staleGames.length > 0) bot.notifyAdmin(`${staleGames.length} stale games deleted`);
    });
};

// ██ ███    ██  █████   ██████ ████████ ██ ██    ██ ███████      ██████ ██   ██  █████  ████████ ███████
// ██ ████   ██ ██   ██ ██         ██    ██ ██    ██ ██          ██      ██   ██ ██   ██    ██    ██
// ██ ██ ██  ██ ███████ ██         ██    ██ ██    ██ █████       ██      ███████ ███████    ██    ███████
// ██ ██  ██ ██ ██   ██ ██         ██    ██  ██  ██  ██          ██      ██   ██ ██   ██    ██         ██
// ██ ██   ████ ██   ██  ██████    ██    ██   ████   ███████      ██████ ██   ██ ██   ██    ██    ███████

const deactivateInactiveChats = () => {
  Game.find({
    _id: { $nin: [process.env.MASTER_CHAT, process.env.ADMIN_CHAT, process.env.GROUP_CHAT] },
    lastPlayDate: { $lt: moment().subtract(90, "days") },
    enabled: true,
  })
    .select("telegramChatId telegramTopicId telegramChannel enabled settings")
    .then((games: HydratedDocument<IGame>[]) => {
      games.forEach(deactivate);
      if (games.length > 0) bot.notifyAdmin(`${games.length} inactive chats deactivated`);
    });
};

// ██████  ██       █████  ██    ██     ███████ ████████ ██████  ███████  █████  ██   ██
// ██   ██ ██      ██   ██  ██  ██      ██         ██    ██   ██ ██      ██   ██ ██  ██
// ██████  ██      ███████   ████       ███████    ██    ██████  █████   ███████ █████
// ██      ██      ██   ██    ██             ██    ██    ██   ██ ██      ██   ██ ██  ██
// ██      ███████ ██   ██    ██        ███████    ██    ██   ██ ███████ ██   ██ ██   ██

const updatePlayStreak = () => {
  //Update play streaks
  Player.find({ playStreak: { $gt: 0 } })
    .select("game playStreak maxPlayStreak lastPlayDate")
    .then((players: HydratedDocument<IPlayer>[]) => {
      const uniqueGames = uniq(players.map((player) => player.game));
      if (players.length > 0) bot.notifyAdmin(`${players.length} game streaks updated in ${uniqueGames.length} games`);
      players.forEach((player) => {
        if (player.playStreak > 0) {
          if (player.playStreak > player.maxPlayStreak) {
            player.maxPlayStreak = player.playStreak;
          }
          if (player.lastPlayDate <= moment().subtract(1, "days").toDate()) {
            player.playStreak = 0;
          }
          player.pickedLists = [];
        }
        player.save();
      });
    });
};

// ███████ ████████  █████  ██      ███████     ██████  ██       █████  ██    ██ ███████ ██████  ███████
// ██         ██    ██   ██ ██      ██          ██   ██ ██      ██   ██  ██  ██  ██      ██   ██ ██
// ███████    ██    ███████ ██      █████       ██████  ██      ███████   ████   █████   ██████  ███████
//      ██    ██    ██   ██ ██      ██          ██      ██      ██   ██    ██    ██      ██   ██      ██
// ███████    ██    ██   ██ ███████ ███████     ██      ███████ ██   ██    ██    ███████ ██   ██ ███████

const deleteStalePlayers = async () => {
  const results = await Player.deleteMany({
    date: { $lt: moment().subtract(30, "days") },
    lastPlayDate: { $lt: moment().subtract(30, "days") },
    answers: 0,
    minigamePlays: 0,
    tinygamePlays: 0,
  }).exec();
  bot.notifyAdmin(`${results.deletedCount} stale players deleted`);
};

const unbanPlayers = async () => {
  const unbannedPlayers = await Player.updateMany({ banned: true }, { $set: { banned: false, infractions: 0 } });
  bot.notifyAdmin(`${unbannedPlayers.matchedCount} players unbanned`);
};

const MIN_GLOBAL_ROUNDS = 10;
const MAX_SKIP_RATE = 0.8;
const MAX_LIKE_RATIO = 0.5;
const MIN_VOTES_FOR_LIKE_CHECK = 5;

const updateLowQualityLists = async () => {
  const skipCandidates = await GameRound.aggregate<{ _id: Types.ObjectId }>([
    { $match: { outcome: { $in: ["completed", "skipped"] } } },
    {
      $group: {
        _id: "$listId",
        skipped: { $sum: { $cond: [{ $eq: ["$outcome", "skipped"] }, 1, 0] } },
        total: { $sum: 1 },
      },
    },
    { $match: { total: { $gte: MIN_GLOBAL_ROUNDS } } },
    { $addFields: { skipRate: { $divide: ["$skipped", "$total"] } } },
    { $match: { skipRate: { $gte: MAX_SKIP_RATE } } },
  ]);
  // A high skip rate alone can mean "hard but loved" rather than "low quality" — corroborate
  // with community sentiment. Lists without enough votes to judge sentiment are flagged on
  // skip rate alone.
  const candidates = await List.find({ _id: { $in: skipCandidates.map((r) => r._id) } })
    .select("_id votes")
    .lean();
  const lowQualityIds = candidates
    .filter((list) => {
      const votes = list.votes ?? [];
      if (votes.length < MIN_VOTES_FOR_LIKE_CHECK) return true;
      const likeRatio = votes.filter((vote) => vote.vote > 0).length / votes.length;
      return likeRatio < MAX_LIKE_RATIO;
    })
    .map((list) => list._id);
  const [flagged, unflagged] = await Promise.all([
    List.updateMany({ _id: { $in: lowQualityIds } }, { $set: { lowQuality: true } }),
    List.updateMany({ _id: { $nin: lowQualityIds }, lowQuality: true }, { $set: { lowQuality: false } }),
  ]);
  bot.notifyAdmin(`Low quality lists: ${flagged.modifiedCount} flagged, ${unflagged.modifiedCount} unflagged`);
};

const MAX_HIGH_QUALITY_SKIP_RATE = 0.3;
const MIN_HIGH_QUALITY_LIKE_RATIO = 0.7;
const MIN_VOTES_FOR_HIGH_QUALITY = 5;

// Mirrors updateLowQualityLists, inverted: feeds the new-game quality ramp in selectList.
// Unlike lowQuality (which falls back to skip-rate-alone when votes are sparse), a positive
// "high quality" claim is riskier to get wrong, so it always requires corroborating votes —
// no votes means no flag, regardless of how low the skip rate is.
const updateHighQualityLists = async () => {
  const skipCandidates = await GameRound.aggregate<{ _id: Types.ObjectId }>([
    { $match: { outcome: { $in: ["completed", "skipped"] } } },
    {
      $group: {
        _id: "$listId",
        skipped: { $sum: { $cond: [{ $eq: ["$outcome", "skipped"] }, 1, 0] } },
        total: { $sum: 1 },
      },
    },
    { $match: { total: { $gte: MIN_GLOBAL_ROUNDS } } },
    { $addFields: { skipRate: { $divide: ["$skipped", "$total"] } } },
    { $match: { skipRate: { $lte: MAX_HIGH_QUALITY_SKIP_RATE } } },
  ]);
  const candidates = await List.find({ _id: { $in: skipCandidates.map((r) => r._id) } })
    .select("_id votes")
    .lean();
  const highQualityIds = candidates
    .filter((list) => {
      const votes = list.votes ?? [];
      if (votes.length < MIN_VOTES_FOR_HIGH_QUALITY) return false;
      const likeRatio = votes.filter((vote) => vote.vote > 0).length / votes.length;
      return likeRatio >= MIN_HIGH_QUALITY_LIKE_RATIO;
    })
    .map((list) => list._id);
  const [flagged, unflagged] = await Promise.all([
    List.updateMany({ _id: { $in: highQualityIds } }, { $set: { highQuality: true } }),
    List.updateMany({ _id: { $nin: highQualityIds }, highQuality: true }, { $set: { highQuality: false } }),
  ]);
  bot.notifyAdmin(`High quality lists: ${flagged.modifiedCount} flagged, ${unflagged.modifiedCount} unflagged`);
};

let jobs: Job[] = [];

// ███████  ██████ ██   ██ ███████ ██████  ██    ██ ██      ███████
// ██      ██      ██   ██ ██      ██   ██ ██    ██ ██      ██
// ███████ ██      ███████ █████   ██   ██ ██    ██ ██      █████
//      ██ ██      ██   ██ ██      ██   ██ ██    ██ ██      ██
// ███████  ██████ ██   ██ ███████ ██████   ██████  ███████ ███████

if (process.env.NODE_ENV === "production") {
  jobs.push(schedule.scheduleJob("Reset Daily Scores", "0 2 1 * * *", resetDailyScore));
  jobs.push(schedule.scheduleJob("Update Play Streaks", "0 0 2 * * *", updatePlayStreak));
  jobs.push(schedule.scheduleJob("Update Mini Games", "0 0 3 * * *", updateMinigames));
  jobs.push(schedule.scheduleJob("Deactivate Inactive Chats", "0 0 4 * * *", deactivateInactiveChats));
  jobs.push(schedule.scheduleJob("Delete Stale Players", "0 0 5 * * *", deleteStalePlayers));
  jobs.push(schedule.scheduleJob("Delete Stale Games", "0 0 6 * * *", deleteStaleGames));
  jobs.push(schedule.scheduleJob("Unban Banned Players", "0 0 7 * * *", unbanPlayers));
  jobs.push(schedule.scheduleJob("Update Low Quality Lists", "0 0 8 * * *", updateLowQualityLists));
  jobs.push(schedule.scheduleJob("Update High Quality Lists", "0 15 8 * * *", updateHighQualityLists));
  jobs.push(schedule.scheduleJob("Send List Update Notice", "0 0 12 * * *", sendListUpdates));
  jobs.push(schedule.scheduleJob("Notify Stale Lists", "0 0 13 * * 1", notifyStaleLists));
}

// jobs.push(schedule.scheduleJob("Backup Database", "0 0 21 * * *", backupDatabase));

export default jobs;
