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

  $scope.categoryFilters = $scope.categories.map(function(category) { return category; });
  $scope.categoryFilters.push('All');
  $scope.categoryFilters.push('Blank');
  $scope.categoryFilter = 'All';

  $scope.setCategoryFilter = function(category) {
    $scope.categoryFilter = category;
  };
  $scope.setUserFilter = function(user) {
    $scope.userFilter = user;
  };

  $scope.filteredLists = function() {
    if (!$scope.lists) return [];
    return $scope.lists.filter(function(list) {
      if ($scope.categoryFilter === 'All' && $scope.userFilter === 'All') {
        return true;
      } else if ($scope.categoryFilter !== 'All' && $scope.userFilter === 'All') {
        if (list.category) {
          return list.category === $scope.categoryFilter;
        } else {
          return $scope.categoryFilter === 'Blank';
        }
      } else if ($scope.categoryFilter === 'All' && $scope.userFilter !== 'All') {
        return list.creator.username === $scope.userFilter;
      } else {
        if (list.category) {
          return list.category === $scope.categoryFilter && list.creator.username === $scope.userFilter;
        } else {
          return $scope.categoryFilter === 'Blank' && list.creator.username === $scope.userFilter;
        }
      }
    });
  };

  $scope.$on('login', function (_) {
    getLists();
  });

  function getLists() {
    BotsSvc.getLists($scope.currentUser)
    .then(function(response) {
      $scope.lists = response.data;
      $scope.userFilters = _.uniq($scope.lists.map(function(list) { return list.creator.username; }), function(list) { return list; });
      $scope.userFilters.push('All');
      $scope.userFilter = 'All';
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
    }
  };

  $scope.saveList = function(list) {
    list.values = list.values.filter(function(item) {
      return item.value;
    });
    if (list.values.length >= 10) {
      $scope.saving = true;
      BotsSvc.saveList(list)
      .then(function(response) {
        getLists();
        $scope.selectList(response.data);
        $scope.saving = false;
      }, function(err) {
        console.error(err);
        $scope.saving = false;
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
