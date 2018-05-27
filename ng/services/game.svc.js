angular.module('app')
.service('GameSvc', function($http) {

    var svc = this;

    svc.getHighscore = function (game, user) {
      return $http.get('/api/games/' + game + '/' + user + '/highscore');
    };

    svc.setHighscore = function (game, user, score) {
      console.log(score);
      return $http.post('/api/games/' + game + '/' + user + '/highscore', {
        score: score
      });
    };

});
