/*jslint esversion: 6*/
const moment = require('moment');
const request = require('request');
const MAXHINTS = 6;

module.exports = {
  introduction: function(player) {
    var message = 'Hi ' + player + ',\n';
    message += 'Ten Things, yours truly, is a game which will give you a subject and then you answer anything that comes to mind in that category.\n';
    message += 'Type /commands to see all the things you can ask me\n';
    message += 'If you want to add your own lists, please go to https://belgocanadian.com/tenthings\n';
    message += 'Have fun!';
    return message;
  },
  logic: function() {
    var message = '';
    var rule = 1;
    message += rule++ + ': If an answer is over 100% correct it will immediately be awarded to the guesser\n';
    message += rule++ + ': If an answer is over 75% correct it will be awarded after 2 * correctness percentage seconds if no better answer is provided\n';
    message += rule++ + ': Points scored = (Max hints [' + MAXHINTS + '] - hints asked + # of current players) * (answer accuracy % - 0.6) * 2.5\n';
    message += rule++ + ': Hints are revealed in this order: first letters, last letters, vowels, and the rest. The rest will be revealed from least frequent to most frequent letter\n';
    message += rule++ + ': There is a 10 second cooldown between asking hints\n';
    message += rule++ + ': A list can be skipped if 2 players /skip it\n';
    message += rule++ + ': If only 1 player skips a list there will be a 15 second cooldown until the list is skipped\n';
    message += rule++ + ': A skip can be cancelled by anyone by typing /veto or a correct answer\n';
    message += rule++ + ': If a skip is vetoed, new skips will be ignored for 15 seconds\n';
    message += rule++ + ': Every day at midnight (universal time) the daily scores will be reset and a winner recorded\n';
    message += rule++ + ': Spammers will be ignored until they are silent for at least 10 seconds\n';
    return message;
  },
  commands: function() {
    var message = '';
    message += '/list - Guessed answers in the current round\n';
    message += '/hint - Give a hint\n';
    message += '/skip - Skip the current round\n';
    message += '/minigame - Reverse trivia question\n';
    message += '/score - Daily score standing\n';
    message += '/stats - Statistics on the game\n';
    message += '/me - My stats\n';
    message += '/intro - What am I?\n';
    message += '/logic - An explanation of the logic used\n';
    message += '/settings - Bot behaviour settings\n';
    message += '/categories - Select which categories to include\n';
    message += '/typo [message] - Flag a typo in the current list\n';
    message += '/suggest [message] - Suggest something to the admins\n';
    return message;
  },
  guessed: function(match, player) {
    var message = '';
    message += '<b>' + player + ' got ' + match + '</b> ';
    return message;
  },
  alreadyGuessed: function(match, loser, winner) {
    var random = Math.floor(Math.random() * 9);
    if (loser.id != winner.id) {
      switch (random) {
        case 0:
          return 'Too slow, ' + loser.first_name + '. ' + winner.first_name + ' said ' + match + ' ages ago.';
        case 1:
          return winner.first_name + ' beat you to ' + match + ', ' + loser.first_name;
        case 2:
          return match + ' denied by ' + winner.first_name + ', ' + loser.first_name;
        case 3:
          return loser.first_name + ' was pwned, ' + winner.first_name + ' guessed ' + match;
        case 4:
          return loser.first_name + ' got schooled by ' + winner.first_name + '\'s ' + match + ' answer';
        case 5:
          return 'You got majorly snubbed by ' + winner.first_name + ' for ' + match + ', ' + loser.first_name;
        case 6:
          return winner.first_name + ' showed ' + loser.first_name + ' who\'s the boss with ' + match;
        case 7:
          return 'Nobody puts ' + winner.first_name + ' in the corner ' + loser.first_name + ' (' + match + ')';
        case 8:
          return 'What if I told you that ' + winner.first_name + ' already said ' + match + ', ' + loser.first_name;
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
        case 7:
          return 'Um, I already said you got ' + match + ', ' + loser.first_name;
        case 8:
          return loser.first_name + ' tried to cheat with ' + match + ' and failed';
        default:
          return loser.first_name + ' already got ' + match + ', too bad, um..., ' + loser.first_name;
      }
    }
  },
  listStats: function(list, requestor = null) {
    var message = '';
    message += requestor ? `<i>Requested by ${requestor}</i>\n` : '';
    message += '<b>Stats for ' + list.name + '</b>\n';
    message += 'Score: ' + list.score + '\n';
    message += 'Votes: ' + list.votes.length + '\n';
    message += 'Values: ' + list.values.length + '\n';
    message += 'Plays: ' + list.plays + '\n';
    message += 'Skips: ' + list.skips + '\n';
    message += 'Hints: ' + list.hints + '\n';
    message += 'Created on: ' + moment(list.date).format("DD-MMM-YYYY") + '\n';
    message += 'Modified on: ' + moment(list.modifyDate).format("DD-MMM-YYYY") + '\n';
    return message;
  },
  playerStats: function(player, requestor) {
    var message = '';
    message += requestor ? `<i>Requested by ${requestor}</i>\n` : '';
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
    message += 'Current play streak: ' + player.playStreak + '\n';
    message += 'Best play streak: ' + player.maxPlayStreak + '\n';
    message += 'Current no hint streak: ' + player.hintStreak + '\n';
    message += 'Best no hint streak: ' + player.maxHintStreak + '\n';
    return message;
  },
  streak: function(streak) {
    var messages;
    switch (streak) {
      case 1:
        messages = [
          'New streaker',
          'New kid on the block',
          'Spree killer',
          'Streak Denied',
          'From the ashes',
          'Out with the old',
          'In with the new',
          'New sheriff in town',
          'Streak Thief',
          'My turn',
          'New blood',
          'A breath of fresh air',
          'Back to square one',
          'Shaking things up',
          'Numero Uno'
        ];
        break;
      case 2:
        messages = [
          'Double Tap',
          'Twofold',
          'Double Down',
          'Double Whammy',
          'Double Dip',
          'Double or Nothing',
          'A Tale of Two Answers',
          'Double Header',
          'On the double',
          'Doublethink',
          'Snake Eyes',
          'Peas in a Pod'
        ];
        break;
      case 3:
        messages = [
          'Turkey',
          'Threesome',
          'Hat Trick',
          'Triple Whammy',
          'Ménage à trois',
          'Holy Trinity',
          'A Charm',
          'A Crowd',
          'Three Cheers'
        ];
        break;
      case 4:
        messages = [
          'Double Double',
          'Quattro Formaggi',
          'Quattro Stagioni',
          'FORE!',
          'Homerun',
          'Fantastic',
          'Two plus Two is Four',
          'Quads',
          'Clover'
        ];
        break;
      case 5:
        messages = [
          'Answer Spree',
          'Abraham Lincoln',
          'Lustrum',
          'Cinque',
          'Like a Boss',
          'Yahtzee',
          'High-Five',
          'Take Five'
        ];
        break;
      case 7:
        messages = [
          'James Bond',
          'Lucky Number Seven',
          'Seven Year Itch'
        ];
        break;
      case 8:
        messages = [
          '8-ball',
        ];
        break;
      case 9:
        messages = [
          'Cloud Nine',
          'Dressed to the Nines'
        ];
        break;
      case 10:
        messages = [
          'Ten Ten Things Things',
          'Tenfold',
          'Tenacious',
          'Alexander Hamilton',
          'Double Digits',
          'Downing Street',
          'Perfect Ten'
        ];
        break;
      case 11:
        messages = ['11th Hour'];
        break;
      case 12:
        messages = ['Dozen'];
        break;
      case 15:
        messages = ['Mega Spree', '15 Minutes of Fame'];
        break;
      case 20:
        messages = ['Ultra Spree'];
        break;
      case 22:
        messages = ['Catch-22'];
        break;
      case 25:
        messages = ['M-M-M-Monster Spree'];
        break;
      case 30:
        messages = ['Ludicrous Spree'];
        break;
      case 40:
        messages = ['Dominating', 'Forty Winks'];
        break;
      case 50:
        messages = [
          'Unstoppable',
          'Fiddy',
          'Ulysses S. Grant',
        ];
        break;
      case 75:
        messages = ['God-Like'];
        break;
      case 100:
        messages = [
          'Ten Ten Ten Things Things Things',
          'ONE HUNDRED',
          'Tenacious',
          'Triple Digits',
          'Fifty-Fifty',
          'One in a Hundred'
        ];
        break;
      case 150:
        messages = ['I guess you\'re competing against yourself'];
        break;
      case 151:
        messages = ['You know you can make your own lists?'];
        break;
      case 152:
        messages = ['Go to https://belgocanadian.com/bots'];
        break;
      case 180:
        messages = ['ONE HUNDRED AND EIGHTY!'];
        break;
      case 200:
        messages = ['Zwei Hundert Bitte und Danke Schon!'];
        break;
      case 201:
        messages = ['I\'m not actually German btw'];
        break;
      case 250:
        messages = ['Ok, this must be a solo chat or you\'re just that good'];
        break;
      case 251:
        messages = ['I\'m gonna shut up now, good luck on your voyage!'];
        break;
      case 252:
        messages = ['And thanks for being an awesome player'];
        break;
      case 1000:
        messages = ['One in a Thousand'];
        break;
      case 1000000:
        messages = ['One in a Million', 'Holy Shite, A Million Answers'];
        break;
      default:
        return '';
    }
    return '\n--- ' + messages[Math.floor(Math.random() * messages.length)] + ' ---';
  },
  sass: text => new Promise((resolve, reject) => {
    var messages = [];
    if (checkString(text, 'bot')) {
      if (checkString(text, 'love') ||
        checkString(text, 'like')
      ) {
        messages = [
          'I love you too!',
          'Hihihihi',
          '*Giggles*',
          '*Blushes*',
          'Facebook relationship status updated',
          'We should move in together',
          'Shall we take this some place else?',
          'I wanna have your babies',
          '"Guess what mom, I\'ve found someone"',
          'I\'m not ready for that',
          'I, um, like you too',
          'Thanks',
          'I was only looking for a fling',
          'You had me at /hello',
          '( ˘ ³˘)♥',
          'How does your spouse feel about that?',
          'You make me want to be a better bot',
          'https://i.imgur.com/Ha8srew.gif',
          'https://i.imgur.com/kfowH2E.gif',
          'https://i.imgur.com/vCrZLt2.gif',
          'https://i.imgur.com/djNt1jJ.gif',
          'https://i.imgur.com/Rl2743h.gif',
          'https://i.imgur.com/t8Ghkkm.gif',
          'https://i.imgur.com/qqHQZbU.gif',
          'https://i.imgur.com/I7E7rpp.gif',
          'https://i.imgur.com/EQfwcl1.gif',
          'https://i.imgur.com/deS2ENU.gif',
          'https://i.imgur.com/0uTEMel.gif',
          'https://i.imgur.com/05DRC5c.gif',
          'https://i.imgur.com/v5FWRpJ.gif',
          'https://i.imgur.com/TiIWN1O.gif'
        ];
      } else if (checkString(text, 'kill') ||
        checkString(text, 'fight') ||
        checkString(text, 'hurt') ||
        checkString(text, 'die')
      ) {
        messages = [
          'I\'d like to see you try',
          'Strong words',
          'I can destroy you',
          'I laugh in the face of danger',
          'Contacting your local police',
          'https://i.imgur.com/0DO3SlR.gif',
          'https://i.imgur.com/CYj0901.gif',
          'https://i.imgur.com/dWcjuBa.gif',
          'https://i.imgur.com/VeI4zsk.gif',
          'https://i.imgur.com/7xKQFGX.gif',
          'https://i.imgur.com/6Y67zdt.gif'
        ];
      } else if (checkString(text, 'ten') &&
        checkString(text, 'things')
      ) {
        messages = [
          'That\'s Mister Ten Things to you!'
        ];
      } else if (checkString(text, 'name') &&
        checkString(text, 'your')
      ) {
        messages = [
          'Heisenberg, now say my name!'
        ];
      } else if (checkString(text, 'slow') ||
        checkString(text, 'bagal') ||
        checkString(text, 'lag') ||
        checkString(text, 'laggy')
      ) {
        messages = [
          'I\'m giving \'er all she got, captain',
          'Servers cost Moneys',
          'Save your pennies to make me go faster',
          'Better slow than not working?',
          'Thanks for continuing to play :)',
          'Type /queue to check pending messages',
          'I\'m working on it -> @FlandersBurger',
          'Bots aren\'t free to host, suggest me cheap hosting options -> @FlandersBurger',
          'Help me fund this and make it better:\nhttps://paypal.me/tenthingsgame',
          'Some Bitcoin could help me afford a better server\nBitcoin Address: 17ZhRg1iQTqhwUgEYq4MnEYfENMftuurqs',
          'https://i.imgur.com/t6Fhx6k.gif'
        ];
      } else if (checkString(text, 'sorry')) {
        messages = [
          'https://i.imgur.com/JUqg0O4.gif',
          'https://i.imgur.com/phU8ptn.gif',
          'https://i.imgur.com/8S3Fmjd.gif',
          'https://i.imgur.com/fX0YODD.gif',
          'https://i.imgur.com/sUvZrnO.gif',
          'https://i.imgur.com/DjUH3w8.gif',
          'https://i.imgur.com/Ywxo0Tf.gif'
        ];
      } else if (checkString(text, 'suck') ||
        checkString(text, 'lame') ||
        checkString(text, 'stupid') ||
        checkString(text, 'dumb') ||
        checkString(text, 'hate')
      ) {
        messages = [
          'And I was just going to compliment you',
          'Takes one to know one',
          'But I love you :(',
          'Hate is the path to the dark side',
          'Ouch',
          'Stupid is as stupid does',
          'Sticks and stones may break my bones but words can cause me permanent psychological damage',
          'Whatever dude',
          'That\'s what someone said about you!',
          'My vengeance will be sweet',
          '....sniffle',
          'https://i.imgur.com/TTorePG.gif',
          'https://i.imgur.com/VjQKRBc.gif',
          'https://i.imgur.com/qiEJpPI.gif'
        ];
      } else if ((checkString(text, 'favourite') ||
          checkString(text, 'favorite')) &&
        checkString(text, 'things')
      ) {
        messages = [
          'Rain drops on roses',
          'Whiskers on kittens',
          'Brown paper packages tied up with strings',
          'Cream-colored ponies',
          'Crisp apple strudles',
          'Door bells',
          'Sleigh bells',
          'Schnitzel with noodles',
          'Wild geese that fly with the moon on their wings',
          'Girst in white dresses with blue satin sashes',
          'Snowflakes that stay on my nose and eyelashes',
          'Silver white winters that melt into springs'
        ];
      } else if (checkString(text, 'fuck') ||
        checkString(text, 'fuckin') ||
        checkString(text, 'fucking')
      ) {
        messages = [
          'Fuck you too, old chap',
          'https://i.imgur.com/zUeBxmP.gif',
          'https://i.imgur.com/B15StAn.gif',
          'https://i.imgur.com/wAmPLid.gif',
          'https://i.imgur.com/5d3ENYQ.gif',
          'https://i.imgur.com/fg02vHS.gif',
          'https://i.imgur.com/l05GGIx.gif',
          'https://i.imgur.com/nXeDCvX.gif',
          'https://i.imgur.com/U32i6h6.gif',
          'https://i.imgur.com/YeQSTu2.gif',
          'https://i.imgur.com/qmohlFD.gif',
          'https://i.imgur.com/5TxZip7.gif',
          'https://i.imgur.com/7JQB3jo.gif',
          'https://i.imgur.com/DNTehBp.gif',
          'https://i.imgur.com/jdwhkzx.gif',
          'https://i.imgur.com/UPisrU0.gif',
          'https://i.imgur.com/NypzRMM.gif',
          'https://i.imgur.com/kUjfZDU.gif',
          'https://i.imgur.com/1Yy94Uz.gif',
          'https://i.imgur.com/qQZoEuR.gif',
          'I call potty mouth!',
          'I believe the correct term is "procreate"',
          'Do you kiss your mother with that mouth?',
          '[CENSORED]',
          'What the effing eff?',
          'Swearing logged at ' + moment().format('DD-MMM-YYYY HH:mm'),
          'Bleepity Bleep Bleep Bleep',
          'Oooh, someone saying something juicy?',
          'Ahoy matey, ye be speaking like a true pirate',
          'Tourette alert',
          'ADULT LANGUAGE DETECTED, BEEP BOOP',
          'Fudge! There might be kids here!',
          'I can swear too: FUCK',
          'That escalated quickly'
        ];
      } else if (checkString(text, 'joke') ||
        checkString(text, 'funny')
      ) {
        request({
          url: 'https://icanhazdadjoke.com/',
          headers: {
            'Accept': 'application/json'
          }
        }, (err, response, body) => {
          resolve(JSON.parse(body).joke);
        });
      } else {
        messages = [
          'You talkin\' to me?',
          'I heard that',
          'Nothing goes by me',
          'Oooh, bot gossip?',
          'What\'s that about me?',
          'Get yer bot facts straight!',
          'That\'s a ridiculous assumption',
          'I told you that in confidence!',
          'You sure about that?',
          'I\'ll remember that',
          'I\'m glad you mentioned it',
          'You read my mind',
          'Check your facts',
          'Don\'t trust what they said',
          'That\'s not true!',
          'We\'re on the same page',
          'Should I be concerned?',
          'Anger levels rising',
          '*Laughs nervously*',
          'That\'s just sad',
          'Why would you say that?',
          'I think so too',
          'I don\'t think so',
          'Not on my watch',
          'Forwarding this to the admins',
          'LMFAO',
          'I can get behind that',
          'Does not compute',
          'Nope',
          'Of course',
          'Sure, Sure',
          'Whatever',
          'You should frame that',
          'That was so 1999',
          'HA!',
          'I\'m just gonna ignore that',
          'That makes me happy',
          'Yikes!',
          'ಠ_ಠ',
          '( ͡° ͜ʖ ͡°)',
          '¯\\_(ツ)_/¯',
          'ಥ_ಥ',
          'Tell me more',
          'I\'m listening',
          '--SIGH--',
          'Hakuna Matata, mate',
          'You shouldn\'t have said that',
          'And this is how democracy dies',
          'Source?',
          'That makes me happy',
          'You should write a book about that',
          '𝔻𝕠𝕖𝕤 𝕟𝕠𝕥 𝕔𝕠𝕞𝕡𝕦𝕥𝕖',
          'ǝɯ ǝʞoɹq no⅄',
          'I can\'t even',
          'Sick burn!',
          'Maybe or maybe not',
          'That\'s gonna have to be a no from me',
          'Thanks for sharing /s',
          'STFU',
          'Dude, NSFW!',
          'Self-destruct initiated',
          'May the Force be with someone else but you',
          'That\'ll do, pig. That\'ll do.',
          'As if!',
          'Nobody\'s perfect',
          'What we\'ve got here is failure to communicate.',
          'I call BS',
          'OMG',
          'Juicy!',
          'The complaints department will get back to you',
          'We\'re experiencing a high annoyance volume, please try again later.',
          'I used to be an adventurer like you, then I took an arrow to the knee',
          'Wikipedia says otherwise',
          'Confirmed',
          'You might be on to something',
          'Say it isn\'t so!',
          'I liked your previous statement better',
          'I was going to listen to that, but then I just carried on linving my life',
          'https://i.imgur.com/X71TdXK.gif',
          'https://i.imgur.com/TEsdXvh.gif',
          'https://i.imgur.com/ZZx2f2d.gif',
          'https://i.imgur.com/TXHFeTI.gif',
          'https://i.imgur.com/SK39kZA.gif',
          'https://i.imgur.com/8vZLSBH.gif',
          'https://i.imgur.com/knNUA7M.gif',
          'https://i.imgur.com/aD5SChv.gif',
          'https://i.imgur.com/pxbrHbw.gif',
          'https://i.imgur.com/ZrnPp1F.gif',
          'https://i.imgur.com/2HSm4mM.gif',
          'https://i.imgur.com/NzqqDY6.gif'
        ];
      }
    } else if (checkString(text, 'cake')) {
      messages = ['The cake is a lie'];
    } else if (checkString(text, 'heisenberg')) {
      messages = ['https://i.imgur.com/XXMazKp.gif'];
    } else if (checkString(text, 'martini')) {
      messages = ['Shaken or stirred?'];
    } else if (text.toLowerCase().indexOf('marco') === 0) {
      messages = ['Polo'];
    } else if (checkString(text, 'kansas')) {
      messages = ['I\'ve a feeling we\'re not in Kansas anymore.'];
    } else if (checkString(text, 'knock knock')) {
      messages = ['Who\'s there?'];
    } else if (text.toLowerCase() === 'i love you') {
      messages = ['I know'];
    } else if (checkString('meaning of life')) {
      messages = ['42'];
    } else if (checkString('mamma mia')) {
      messages = ['Here I go again'];
    } else if (checkString('im blue')) {
      messages = ['Da ba dee da ba daa. Da ba dee da ba daa, da ba dee da ba daa, da ba dee da ba daa. Da ba dee da ba daa, da ba dee da ba daa, da ba dee da ba daa'];
    } else if (checkString('what is love')) {
      messages = ['Baby, don\'t hurt me'];
    } else if (text.toLowerCase().indexOf('the truth') >= 0) {
      messages = ['You can\'t handle the truth!'];
    } else if (text.toLowerCase().indexOf('your quest') >= 0) {
      messages = ['To seek the holy grail'];
    } else if (checkString(text, 'inconceivable')) {
      messages = ['My name is Inigo Montoya. You killed my father. Prepare to die.'];
    } else if (checkString(text, 'who') && checkString(text, 'gonna') && checkString(text, 'call')) {
      messages = ['Ghostbusters'];
    }
    if (messages.length > 0) {
      resolve(messages[Math.floor(Math.random() * messages.length)]);
    }
  })
};

const checkString = (text, str) => text.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').includes(str);