angular.module("app").service("FileSvc", function ($http) {
  var svc = this;

  svc.getQuizFiles = function (quiz) {
    return $http.get("/api/quizzes/" + quiz);
  };
});
