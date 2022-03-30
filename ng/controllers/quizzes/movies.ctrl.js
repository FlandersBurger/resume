angular.module('app')
.controller('QuizMoviesCtrl', function ($scope, FileSvc) {
  FileSvc.getImages('movies')
  .then(function(response) {
    $scope.images = response.data;
  });
});
