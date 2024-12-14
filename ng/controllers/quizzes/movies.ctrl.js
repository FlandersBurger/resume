angular.module("app").controller("QuizMoviesCtrl", function ($scope, FileSvc) {
  FileSvc.getQuizFiles("movies").then(function (response) {
    $scope.images = response.data;
  });
});
