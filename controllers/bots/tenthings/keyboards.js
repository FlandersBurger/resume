module.exports = {
  scores: {
    inline_keyboard: [
      [
        {
          'text': 'Daily Score',
          'callback_data': JSON.stringify({
            type: 'score',
            id: 'd',
            game: msg.chat.id
          })
        },
        {
          'text': 'Top Daily Score',
          'callback_data': JSON.stringify({
            type: 'score',
            id: 'td',
            game: msg.chat.id
          })
        }
      ],
      [
        {
          'text': 'Top Win Ratio',
          'callback_data': JSON.stringify({
            type: 'score',
            id: 'tr',
            game: msg.chat.id
          })
        },
        {
          'text': 'Top Overall Score',
          'callback_data': JSON.stringify({
            type: 'score',
            id: 'ts',
            game: msg.chat.id
          })
        }
      ],
      [
        {
          'text': 'Top Average',
          'callback_data': JSON.stringify({
            type: 'score',
            id: 'ta',
            game: msg.chat.id
          })
        }
      ]
    ]
  },
  stats: {
    inline_keyboard: [
      [
        {
          'text': 'Game Stats',
          'callback_data': JSON.stringify({
            type: 'stat',
            id: game.chat_id + '_g_' + game.chat_id
          })
        },
        {
          'text': 'List Stats',
          'callback_data': JSON.stringify({
            type: 'stat',
            id: game.chat_id + '_l_' + game.list._id
          })
        }
      ],
      [
        {
          'text': 'My Stats',
          'callback_data': JSON.stringify({
            type: 'stat',
            id: game.chat_id + '_p_' + player._id
          })
        },
        {
          'text': 'Player Stats',
          'callback_data': JSON.stringify({
            type: 'stat',
            id: game.chat_id + '_players'
          })
        }
      ],
      [
        {
          'text': 'Most Skipped Lists',
          'callback_data': JSON.stringify({
            type: 'stat',
            id: game.chat_id + '_mostskipped'
          })
        },
        {
          'text': 'Most Played Lists',
          'callback_data': JSON.stringify({
            type: 'stat',
            id: game.chat_id + '_mostplayed'
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
    ]
  },
  like: {
    inline_keyboard: [[
      {
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
    ]]
  }
};
