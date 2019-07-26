module.exports = {
  stats: function() {
    return {
      inline_keyboard: [
        [
          {
            'text': 'List Stats',
            'callback_data': JSON.stringify({
              type: 'stats',
              data: 'list'
            })
          },
          {
            'text': 'Player Stats',
            'callback_data': JSON.stringify({
              type: 'stats',
              data: 'player'
            })
          },
        ],
        [
          {
            'text': 'Global Stats',
            'callback_data': JSON.stringify({
              type: 'stats',
              data: 'global'
            })
          },
          {
            'text': 'Game Stats',
            'callback_data': JSON.stringify({
              type: 'stats',
              data: 'game'
            })
          },
        ]
      ]
    };
  },
  stats_list: function(game) {
    return {
        inline_keyboard: [
        [
          {
            'text': 'Most Skipped',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_mostskipped'
            })
          },
          {
            'text': 'Least Skipped',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_leastskipped'
            })
          }
        ],
        [
          {
            'text': 'Most Hints Asked',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_mosthinted'
            })
          },
          {
            'text': 'Least Hints Asked',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_leasthinted'
            })
          }
        ],
        [
          {
            'text': 'Least Popular Lists by Votes',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_leastpopular'
            })
          },
          {
            'text': 'Most Popular Lists by Votes',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_mostpopular'
            })
          }
        ],
        [
          {
            'text': 'Most Played Lists',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_mostplayed'
            })
          }
        ]
      ]
    };
  },
  stats_player: function(game) {
    return {
      inline_keyboard: [
        [
          {
            'text': 'My Stats',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_p_'
            })
          },
          {
            'text': 'Other Player Stats',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_players'
            })
          }
        ],
        [
          {
            'text': 'Daily Score',
            'callback_data': JSON.stringify({
              type: 'score',
              id: game.chat_id + '_d'
            })
          },
          {
            'text': 'Top Daily Score',
            'callback_data': JSON.stringify({
              type: 'score',
              id: game.chat_id + '_td'
            })
          }
        ],
        [
          {
            'text': 'Top Win Ratio',
            'callback_data': JSON.stringify({
              type: 'score',
              id: game.chat_id + '_tr'
            })
          },
          {
            'text': 'Top Overall Score',
            'callback_data': JSON.stringify({
              type: 'score',
              id: game.chat_id + '_ts'
            })
          }
        ],
        [
          {
            'text': 'Top Average',
            'callback_data': JSON.stringify({
              type: 'score',
              id: game.chat_id + '_ta'
            })
          }
        ]
      ]
    };
  },
  stats_game: function(game) {
    return {
      inline_keyboard: [
        [
          {
            'text': 'This game',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_g_' + game.chat_id
            })
          },
          {
            'text': game.list.name,
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_l_' + game.list._id
            })
          }
        ],
        [
          {
            'text': 'Most Skips Requested',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_skippers'
            })
          },
          {
            'text': 'Most Correct Answers',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_answers'
            })
          }
        ],
        [
          {
            'text': 'Most Days Played',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_plays'
            })
          },
          {
            'text': 'Most Snubs',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_snubs'
            })
          }
        ],
        [
          {
            'text': 'Most Hints Asked',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_hints'
            })
          },
          {
            'text': 'Most Wins',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_wins'
            })
          }
        ],
        [
          {
            'text': 'Best Answer Streak',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_astreak'
            })
          },
          {
            'text': 'Best Play Streak',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_pstreak'
            })
          }
        ],
        [
          {
            'text': 'Best No Hint Streak',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: game.chat_id + '_hstreak'
            })
          }
        ],
      ]
    };
  },
  like: function(game) {
    return {
      inline_keyboard: [
        [{
            'text': '\ud83d\udc4d',
            'callback_data': JSON.stringify({
              type: 'rate',
              list: game.list._id,
              vote: 1
            })
          },
          {
            'text': '\ud83d\udc4e',
            'callback_data': JSON.stringify({
              type: 'rate',
              list: game.list._id,
              vote: -1
            })
          }
        ]
      ]
    };
  }
};
