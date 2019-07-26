module.exports = {
  stats: function(chat_id) {
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
              type: 'stat',
              id: 'g'
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
            'text': '"' + game.list.name + '"',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'l_' + game.list._id
            })
          }
        ],
        [
          {
            'text': 'Most Skipped',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'mostskipped'
            })
          },
          {
            'text': 'Least Skipped',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'leastskipped'
            })
          }
        ],
        [
          {
            'text': 'Most Hints Asked',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'mosthinted'
            })
          },
          {
            'text': 'Least Hints Asked',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'leasthinted'
            })
          }
        ],
        [
          {
            'text': 'Least Popular Lists by Votes',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'leastpopular'
            })
          },
          {
            'text': 'Most Popular Lists by Votes',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'mostpopular'
            })
          }
        ],
        [
          {
            'text': 'Most Played Lists',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'mostplayed'
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
              id: 'p_'
            })
          },
          {
            'text': 'Other Player Stats',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'players'
            })
          }
        ],
        [
          {
            'text': 'Daily Score',
            'callback_data': JSON.stringify({
              type: 'score',
              id: 'd'
            })
          },
          {
            'text': 'Top Daily Score',
            'callback_data': JSON.stringify({
              type: 'score',
              id: 'td'
            })
          }
        ],
        [
          {
            'text': 'Top Win Ratio',
            'callback_data': JSON.stringify({
              type: 'score',
              id: 'tr'
            })
          },
          {
            'text': 'Top Overall Score',
            'callback_data': JSON.stringify({
              type: 'score',
              id: 'ts'
            })
          }
        ],
        [
          {
            'text': 'Top Average',
            'callback_data': JSON.stringify({
              type: 'score',
              id: 'ta'
            })
          }
        ],
        [
          {
            'text': 'Most Skips Requested',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'skippers'
            })
          },
          {
            'text': 'Most Correct Answers',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'answers'
            })
          }
        ],
        [
          {
            'text': 'Most Days Played',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'plays'
            })
          },
          {
            'text': 'Most Snubs',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'snubs'
            })
          }
        ],
        [
          {
            'text': 'Most Hints Asked',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'hints'
            })
          },
          {
            'text': 'Most Wins',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'wins'
            })
          }
        ],
        [
          {
            'text': 'Best Answer Streak',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'astreak'
            })
          },
          {
            'text': 'Best Play Streak',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'pstreak'
            })
          }
        ],
        [
          {
            'text': 'Best No Hint Streak',
            'callback_data': JSON.stringify({
              type: 'stat',
              id: 'hstreak'
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
