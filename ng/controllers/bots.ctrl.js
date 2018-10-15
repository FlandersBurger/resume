angular.module('app')
.controller('BotsCtrl', function ($scope, BotsSvc) {

  $scope.categories = [
    'Music',
    'Television',
    'Movies',
    'Entertainment',
    'Geography',
    'History',
    'Science',
    'Gaming',
    'Sports',
    'Religion',
    'Art and Literature',
    'Misc',
    'Funny',
    'Food and Drink',
    'Society',
    'Nature',
    'Technology',
    'Language'
  ];

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
        { value: '', blurb: '' }
      ]
    });
    $scope.selectedList = $scope.lists[0];
  };

  $scope.addValue = function() {
    if ($scope.selectedList.values.length === $scope.selectedList.values.filter(function(value) { return value.value; }).length) {
      $scope.selectedList.values.push({ value: '', blurb: '' });
    } else {
      console.log('not equal');
    }
  };

  $scope.saveList = function(list) {
    list.values = list.values.filter(function(item) {
      return item.value;
    });
    if (list.values.length >= 10) {
      BotsSvc.saveList(list)
      .then(function(response) {
        getLists();
        $scope.selectList(response.data);
      });
    } else {
      alert('Lists must contain 10 or more values!');
    }
  };

  $scope.deleteList = function(list) {
    BotsSvc.deleteList(list)
    .then(function(response) {
      getLists();
      $scope.selectedList = {};
    });
  };


});
