angular.module("app").service("GameSvc", function ($http) {
  var svc = this;

  svc.getHighscore = function (game, user) {
    return $http.get("/api/games/" + game + "/" + user + "/highscore");
  };

  svc.setHighscore = function (game, user, score) {
    return $http.post("/api/games/" + game + "/" + user + "/highscore", {
      score: score,
    });
  };

  svc.fuzzyMatch = function (values, guess) {
    return $http.post("/api/games/fuzzy_match", {
      values,
      guess,
    });
  };
});
