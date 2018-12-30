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
  $scope.keyDown = function (e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 9:
        if ($("#new-blurb").is(":focus")) {
          setTimeout(function() {
            $scope.addValue();
          }, 100);
        }
        break;
      case 13:
        if ($("#new-blurb").is(":focus")) {
          $scope.addValue();
        } else if ($("#new-value").is(":focus")) {
          $('#new-blurb').focus();
        }
        break;
      default:

    }
    // use e.keyCode
  };

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

  $scope.sortValue = 'name';
  $scope.sortDirection = true;

  $scope.sort = function(sortBy) {
    if ($scope.sortValue === sortBy) {
      $scope.sortDirection = !$scope.sortDirection;
    } else {
      $scope.sortValue = sortBy;
      $scope.sortDirection = true;
    }
    $scope.sorter = ($scope.sortDirection ? '+' : '-') + $scope.sortValue;
  };

  $scope.getCategoryCount = function(category) {
    if (category === 'All') return $scope.filteredLists().length;
    if (!$scope.lists) return 0;
    return $scope.lists.filter(function(list) {
      return list.category === category && ($scope.userFilter === 'All' || list.creator.username === $scope.userFilter);
    }).length;
  };

  function getLists() {
    BotsSvc.getLists($scope.currentUser)
    .then(function(response) {
      $scope.lists = response.data;
      $scope.userFilters = {};
      $scope.userFilters.All = $scope.lists.length;
      $scope.userFilters = $scope.lists.sort(function(a, b) {
        return a.creator.username > b.creator.username;
      }).reduce(function(users, list) {
        if (!users[list.creator.username]) users[list.creator.username] = 0;
        users[list.creator.username]++;
        return users;
      }, $scope.userFilters);
      $scope.userCount = Object.keys($scope.userFilters).length;
      $scope.userFilter = 'All';
    });
  }

  $scope.selectList = function(list) {
    console.log(list.creator._id);
    console.log($scope.currentUser._id);
    $scope.selectedList = list;
  };

  $scope.addList = function() {
    $scope.lists.unshift({
      name: '',
      creator: $scope.currentUser._id,
      date: new Date(),
      values: []
    });
    $scope.selectedList = $scope.lists[0];
  };

  $scope.addValue = function() {
    if ($scope.newItem.value) {
      $scope.newItem.creator = $scope.currentUser._id;
      $scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem)));
      $scope.newItem.value = '';
      $scope.newItem.blurb = '';
      if ($scope.selectedList.values.length >= 10) {
        $scope.saveList($scope.selectedList);
      }
    }
    $('#new-value').focus();
  };

  $scope.reportList = function(list) {
    BotsSvc.reportList($scope.currentUser, list);
  };

  $scope.saveList = function(list) {
    list.modifyDate = new Date();
    list.values = list.values.filter(function(item) {
      return item.value;
    });
    if (list.values.length >= 10) {
      $scope.saving = true;
      BotsSvc.saveList($scope.currentUser, list)
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

  $scope.listButtonClass = function(list) {
    var values = list.values.length;
    var blurbs = list.values.filter(function(value) { return value.blurb; }).length;
    if (values === blurbs && list.description) {
      return 'btn-default';
    } else if (blurbs === 0 && !list.description) {
      return 'btn-warning';
    } else if (blurbs === 0 && list.description) {
      return 'btn-info';
    } else {
      return 'btn-primary';
    }
  };


});
