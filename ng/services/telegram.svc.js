angular.module("app").service("TelegramSvc", function ($http, UserSvc) {
  var svc = this;

  svc.linkAccount = function (userId, telegramData) {
    return $http.post(`/api/telegram/${userId}/link`, telegramData).then(function () {
      return UserSvc.getUser();
    });
  };
});
