angular.module("app").service("GameSvc", function ($http) {
  var svc = this;

  svc.getTenthings = function (id = 1) {
    return $http.get("/api/tenthings/web/" + id);
  };

  svc.answerTenthings = function (id = 1, answer) {
    return $http.post("/api/tenthings/web/" + id + "/answer", { answer });
  };

  svc.getTenthingsHint = function (id = 1) {
    return $http.post("/api/tenthings/web/" + id + "/hint");
  };

  svc.skipTenthingsList = function (id = 1) {
    return $http.post("/api/tenthings/web/" + id + "/skip");
  };

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
