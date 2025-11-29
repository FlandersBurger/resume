angular.module("app").service("TelegramSvc", function ($http, UserSvc) {
  var svc = this;

  svc.getGames = function (userId) {
    return $http.get(`/api/telegram/${userId}/games`);
  };

  svc.linkAccount = function (userId, telegramData) {
    return $http.post(`/api/telegram/${userId}/link`, telegramData).then(function () {
      return UserSvc.getUser();
    });
  };
});
