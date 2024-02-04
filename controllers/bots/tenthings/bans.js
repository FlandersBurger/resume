const bot = require("../../../connections/telegram");
const i18n = require("../../../i18n");
const keyboards = require("./keyboards");

const List = require("../../../models/tenthings/list")();

const cache = {};

exports.initiate = (game, { list, from_id, requestor }) => {
  bot.checkAdmin(game.chat_id, from_id).then(async (admin) => {
    if (admin) {
      cache[`${game._id}-${list}`] = from_id;
      const foundList = await List.findOne({ _id: list }).exec();
      if (foundList) {
        bot.sendKeyboard(
          game.chat_id,
          i18n(game.settings.language, `sentences.${game.chat_id > 0 ? "confirmBan" : "corroborateBan"}`, {
            list: foundList.name,
          }),
          keyboards.confirmBan(game.settings.language, foundList)
        );
      }
    } else {
      bot.queueMessage(game.chat_id, i18n(game.settings.language, "warnings.adminFunction", { name: requestor }));
    }
  });
};

exports.process = (game, { list, from_id, requestor }) => {
  if (cache[`${game._id}-${list}`] && (cache[`${game._id}-${list}`] !== from_id || game.chat_id > 0)) {
    banList(game, list);
    delete cache[`${game._id}-${list}`];
  } else {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "warnings.corroborateBanBySamePlayer", { name: requestor })
    );
  }
};

const banList = async (game, listId) => {
  const list = await List.findOne({ _id: listId }).select("_id bans name").exec();
  if (list) {
    if (game.bannedLists.some((bannedListId) => bannedListId == listId)) {
      bot.queueMessage(game.chat_id, i18n(game.settings.language, "sentences.alreadyBannedList", { list: list.name }));
    } else {
      game.bannedLists.push(list._id.toString());
      await game.save();
      list.bans++;
      await list.save();
      bot.queueMessage(game.chat_id, i18n(game.settings.language, "sentences.listBanned", { list: list.name }));
      bot.notifyAdmin(`${game.chat_id} (${game.settings.language}) banned ${list.name}`);
    }
  } else {
    bot.queueMessage(game.chat_id, i18n(game.settings.language, "warnings.unfoundList"));
  }
};