angular.module("app").controller("QuizLogosCtrl", function ($scope, FileSvc) {
  FileSvc.getQuizFiles("logos").then(function (response) {
    $scope.images = response.data;
  });
});
