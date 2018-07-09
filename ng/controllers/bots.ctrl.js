angular.module('app')
.controller('BotsCtrl', function ($scope, BotsSvc) {

  $scope.$on('login', function (_) {
    getLists();
  });

  function getLists() {
    BotsSvc.getLists($scope.currentUser)
    .then(function(response) {
      $scope.lists = response.data;
    });
  }

  $scope.addList = function() {
    $scope.lists.unshift({
      name: '',
      values: [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
      ]
    });
  };
  $scope.saveList = function(list) {
    BotsSvc.saveList(list)
    .then(function(response) {
      getLists();
    });
  };
  $scope.deleteList = function(list) {
    BotsSvc.deleteList(list)
    .then(function(response) {
      getLists();
    });
  };


});
