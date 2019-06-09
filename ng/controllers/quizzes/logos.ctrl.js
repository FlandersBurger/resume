angular.module('app')
.controller('QuizLogosCtrl', function ($scope, FileSvc) {
  FileSvc.getImages('logos')
  .then(function(response) {
    $scope.images = response.data;
  });
});
