angular.module('app')
  .controller('QuizAnimalsCtrl', function($scope, FileSvc) {
    FileSvc.getSounds('animals')
      .then(function(response) {
        $scope.sounds = response.data;
        console.log($scope.sounds);
      });
  });