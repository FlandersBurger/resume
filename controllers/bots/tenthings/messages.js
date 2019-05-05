var moment = require('moment');

module.exports = {
  introduction: function(player) {
    var message = 'Hi ' + player + ',\n';
    message += 'My name is 10 Things and I am a game bot.\n';
    message += 'The game will give you a category and then you answer anything that comes to mind in that category.\n';
    message += 'I have a few things you can ask of me, just type a slash (/) to see the commands.\n';
    message += 'If you want to add your own lists, please go to https://belgocanadian.com/bots\n';
    message += 'And last but not least if you want to suggest anything (new lists or features) type "/suggest" followed by your suggestion!\n\n';
    message += 'Have fun!';
    return message;
  },
  logic: function() {
    var message = '';
    var rule = 1;
    message += rule++ + ': If an answer is over 90% correct it will immediately be awarded to the guesser\n';
    message += rule++ + ': If an answer is over 75% correct it will be awarded after 2 seconds if no 90% answer is provided\n';
    message += rule++ + ': Points scored = (Max hints [' + MAXHINTS + '] - hints asked + # of current players) * (answer accuracy % - 0.6) * 2.5\n';
    message += rule++ + ': Hints are revealed in this order: first letters, last letters, vowels, and the rest. The rest will be revealed from least frequent to most frequent letter\n';
    message += rule++ + ': There is a 10 second cooldown between asking hints\n';
    message += rule++ + ': A list can be skipped if 2 players /skip it\n';
    message += rule++ + ': If only 1 player skips a list there will be a 15 second cooldown until the list is skipped\n';
    message += rule++ + ': A skip can be cancelled by anyone by typing /veto\n';
    message += rule++ + ': Every day at midnight (universal time) the daily scores will be reset and a winner recorded\n';
    return message;
  },
  guessed: function(match, player) {
    var message = '';
    message += '<b>' + player + ' got ' + match + '</b> ';
    /*
    var random = Math.floor(Math.random() * 7);
    switch (random) {
      case 0:
        message += '<i>Like a boss</i>';
        break;
      case 1:
        message += '<i>Oh yeah!</i>';
        break;
      case 2:
        message += '<i></i>';
        break;
      case 3:
        message += '<i></i>';
        break;
      case 4:
        message += '<i></i>';
        break;
      case 5:
        message += '<i></i>';
        break;
      case 6:
        message += '<i></i>';
        break;
      default:
        message += '<i></i>';
    }
    */
    return message;
  },
  alreadyGuessed: function(match, loser, winner) {
    var random = Math.floor(Math.random() * 7);
    if (loser.id != winner.id) {
      switch (random) {
        case 0:
          return 'Too slow, ' + loser.first_name + '. ' + winner.first_name + ' said ' + match + ' ages ago.';
        case 1:
          return winner.first_name + ' beat you to '  + match + ', ' + loser.first_name;
        case 2:
          return match + ' denied by ' + winner.first_name + ', ' + loser.first_name;
        case 3:
          return loser.first_name + ' was pwned, ' + winner.first_name + ' guessed ' + match;
        case 4:
          return loser.first_name + ' got schooled by ' + winner.first_name + '\'s ' + match + ' answer';
        case 5:
          return 'You got majorly snubbed by ' + winner.first_name + ' for ' + match + ', ' + loser.first_name;
        case 6:
          return winner.first_name + ' showed ' + loser.first_name + 'who\s the boss with ' + match;
        default:
          return winner.first_name + ' already got ' + match + ', too bad ' + loser.first_name;
      }
    } else {
      switch (random) {
        case 0:
          return loser.first_name + ' losing it, they already answered ' + match;
        case 1:
          return match + ', ' + loser.first_name + '? I think I\'m having a deja-vu';
        case 2:
          return 'Are you doing ok ' + loser.first_name + '? You already said ' + match;
        case 3:
          return loser.first_name + ' was pwned by themself with ' + match;
        case 4:
          return loser.first_name + ' suffers from short term memory loss, cough, ' + match + '';
        case 5:
          return 'Own goal delivered by ' + loser.first_name + ' for ' + match;
        case 6:
          return 'Great job ' + loser.first_name + ', you just schooled yourself with ' + match;
        default:
          return loser.first_name + ' already got ' + match + ', too bad, um..., ' + loser.first_name;
      }
    }
  },
  listStats: function(list) {
    var message = '';
    message += '<b>Stats for ' + list.name + '</b>\n';
    message += 'Score: ' + list.score + '\n';
    message += 'Votes: ' + list.voters.length + '\n';
    message += 'Values: ' + list.values.length + '\n';
    message += 'Plays: ' + list.plays + '\n';
    message += 'Skips: ' + list.skips + '\n';
    message += 'Hints: ' + list.hints + '\n';
    message += 'Created on: ' + moment(list.date).format("DD-MMM-YYYY") + '\n';
    message += 'Modified on: ' + moment(list.modifyDate).format("DD-MMM-YYYY") + '\n';
    message += '\n';
    return message;
  },
  playerStats: function(player) {
    var message = '';
    message += '<b>Personal Stats for ' + player.first_name + '</b>\n';
    message += 'Total Score: ' + player.score + '\n';
    message += 'High Score: ' + player.highScore + '\n';
    message += 'Average Score: ' + Math.round(player.score / player.plays) + '\n';
    message += player.wins + ' wins out of ' + player.plays + ' days played\n';
    message += 'Correct answers given: ' + player.answers + '\n';
    message += 'Correct answers snubbed: ' + player.snubs + '\n';
    message += 'Hints asked: ' + player.hints + '\n';
    message += 'Suggestions given: ' + player.suggestions + '\n';
    message += 'Lists played: ' + player.lists + '\n';
    message += 'Lists skipped: ' + player.skips + '\n';
    message += 'Best answer streak: ' + player.streak + '\n';
    return message;
  },
  streak: function(streak) {
    switch (streak) {
      case 1:
        return '\n--- New streaker! ---';
      case 2:
        return '\n--- Double-tap ---';
      case 3:
        return '\n--- Turkey ---';
      case 5:
        return '\n--- Answer Spree ---';
      case 10:
        return '\n--- Ten Ten Things Things ---';
      case 15:
        return '\n--- Mega Spree ---';
      case 20:
        return '\n--- Ultra Spree ---';
      case 25:
        return '\n--- M-M-M-Monster Spree ---';
      case 30:
        return '\n--- Ludicrous Spree ---';
      case 40:
        return '\n--- Dominating ---';
      case 50:
        return '\n--- Unstoppable ---';
      case 75:
        return '\n--- God-Like ---';
      case 100:
        return '\n--- Ten Ten Ten Things Things Things ---';
      default:
        return '';
    }
  }
};
