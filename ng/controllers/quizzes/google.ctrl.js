angular.module('app')
.controller('QuizGoogleCtrl', function ($scope, FileSvc) {
  FileSvc.getImages('google')
  .then(function(response) {
    $scope.images = response.data;
  });
});
