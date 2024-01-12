const bot = require("../../../connections/telegram");
const messages = require("./messages");

module.exports = (game, text, from) => {
  if (game.settings.sass && game.enabled) {
    messages.sass(text).then(
      (sass) => {
        if (sass) {
          console.log(`SASS: ${text} => ${sass}`);
          if (sass.includes("http")) {
            if (sass.includes(".gif")) {
              bot.sendAnimation(game.chat_id, sass);
            } else {
              bot.sendPhoto(game.chat_id, sass);
            }
          } else {
            bot.queueMessage(game.chat_id, sass);
          }
        }
      },
      (err) => null
    );
  }
};
