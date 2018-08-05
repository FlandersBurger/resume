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

  $scope.selectList = function(list) {
    $scope.selectedList = list;
  };

  $scope.addList = function() {
    $scope.lists.unshift({
      name: '',
      creator: $scope.currentUser._id,
      date: new Date(),
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
    $scope.selectedList = $scope.lists[0];
  };

  $scope.saveList = function(list) {
    list.values = list.values.filter(function(item) {
      return item.value;
    });
    BotsSvc.saveList(list)
    .then(function(response) {
      getLists();
      $scope.selectList(response.data);
    });
  };

  $scope.deleteList = function(list) {
    BotsSvc.deleteList(list)
    .then(function(response) {
      getLists();
      $scope.selectList(list);
    });
  };


});
