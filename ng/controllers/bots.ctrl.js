angular.module('app')
.controller('BotsCtrl', function ($scope, BotsSvc) {

  BotsSvc.getLists()
  .then(function(response) {
    $scope.lists = response.data;
    console.log($scope.lists);
  });

});
