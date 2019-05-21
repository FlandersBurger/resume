module.exports = function (type, game_id, statType) {
  return new Promise(function(resolve, reject) {
    switch (type) {
      case 'score':
        TenThings.findOne({
          chat_id: game_id
        }).select('players chat_id').exec(function(err, game) {
          var str = '';
          switch (scoreType) {
            case 'td':
              str = '<b>Top Daily Scores</b>\n';
              game.players.sort(function(a, b) {
                return b.highScore - a.highScore;
              }).slice(0, 10).forEach(function(player, index) {
                str += (index + 1) + ': ' + player.first_name + ': ' + player.highScore + '\n';
              });
              resolve(str);
              break;
            case 'tr':
              str = '<b>Top Win Ratio</b>\n';
              game.players.sort(function(a, b) {
                return (b.plays === 0 ? 0 : b.wins / b.plays) - (a.plays === 0 ? 0 : a.wins / a.plays);
              }).slice(0, 10).forEach(function(player, index) {
                str += (index + 1) + ': ' + player.first_name + ': ' + player.wins + '/' + player.plays + ' (' + (Math.round(player.plays === 0 ? 0 : player.wins / player.plays * 10000) / 100) + '%)\n';
              });
              resolve(str);
              break;
            case 'ts':
              str = '<b>Top Overall Score</b>\n';
              game.players.sort(function(a, b) {
                return b.score - a.score;
              }).slice(0, 10).forEach(function(player, index) {
                str += (index + 1) + ': ' + player.first_name + ': ' + player.score + '\n';
              });
              resolve(str);
              break;
            case 'ta':
              str = '<b>Top Average Daily Score</b>\n';
              game.players.sort(function(a, b) {
                return (b.plays === 0 ? 0 : b.score / b.plays) - (a.plays === 0 ? 0 : a.score / a.plays);
              }).slice(0, 10).forEach(function(player, index) {
                str += (index + 1) + ': ' + player.first_name + ': ' + Math.round(player.plays === 0 ? 0 : player.score / player.plays) + '\n';
              });
              resolve(str);
              break;
            default:
              resolve(getDailyScores(game));
          }
        });

        break;
      default:

    }
  });
};
