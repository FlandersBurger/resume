angular.module("app").service("FileSvc", function ($http) {
  var svc = this;

  svc.getImages = function (folder) {
    return $http.get("/api/quizzes/images/" + folder);
  };

  svc.getSounds = function (folder) {
    return $http.get("/api/quizzes/sounds/" + folder);
  };
});
