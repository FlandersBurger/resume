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
    'Language',
    'Business',
    'Internet'
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
        return list.creator === $scope.userFilter;
      } else {
        if (list.category) {
          return list.category === $scope.categoryFilter && list.creator === $scope.userFilter;
        } else {
          return $scope.categoryFilter === 'Blank' && list.creator === $scope.userFilter;
        }
      }
    });
  };

  $scope.$on('login', function (_) {
    $scope.getLists();
  });


  $scope.sort = function(sortBy) {
    if ($scope.sortValue === sortBy) {
      $scope.sortDirection = !$scope.sortDirection;
    } else {
      $scope.sortValue = sortBy;
      $scope.sortDirection = true;
    }
    $scope.sorter = ($scope.sortDirection ? '+' : '-') + $scope.sortValue;
  };

  $scope.sortValue = 'date';
  $scope.sortDirection = true;
  $scope.sortList = 'value';
  $scope.sort('date');

  $scope.getCategoryCount = function(category) {
    if (category === 'All') return $scope.filteredLists().length;
    if (!$scope.lists) return 0;
    return $scope.lists.filter(function(list) {
      return list.category === category && ($scope.userFilter === 'All' || list.creator.username === $scope.userFilter);
    }).length;
  };

  $scope.getLists = function() {
    $scope.loading = true;
    BotsSvc.getLists($scope.currentUser)
    .then(function(response) {
      $scope.lists = response.data;
      console.log($scope.lists[0]);
      $scope.userFilters = {};
      $scope.userFilters.All = $scope.lists.length;
      $scope.userFilters = $scope.lists.sort(function(a, b) {
        return a.creator > b.creator;
      }).reduce(function(users, list) {
        if (!users[list.creator]) users[list.creator] = 0;
        users[list.creator]++;
        return users;
      }, $scope.userFilters);
      $scope.userCount = Object.keys($scope.userFilters).length;
      $scope.userFilter = 'All';
      $scope.loading = false;
    });
  };

  $scope.selectList = function(list) {
    BotsSvc.getList(list)
    .then(function(response) {
      $scope.selectedList = response.data;
      console.log($scope.selectedList);
    });
  };

  $scope.selectCategory = function(category) {
    $scope.selectedList.category = category;
    $scope.selectingCategory = false;
  };

  $scope.addList = function() {
    var newList = _.find($scope.lists, function(list) { return !list._id; });
    if (!newList) {
      $scope.lists.unshift({
        name: '',
        creator: $scope.currentUser._id,
        date: new Date(),
        values: [],
        answers: 0
      });
      $scope.selectedList = $scope.lists[0];
    } else {
      $scope.selectedList = newList;
    }
  };

  $scope.addValue = function() {
    if ($scope.newItem.value) {
      $scope.newItem.creator = $scope.currentUser._id;
      $scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem)));
      $scope.selectedList.answers++;
      $scope.newItem.value = '';
      $scope.newItem.blurb = '';
      if ($scope.selectedList.values.length >= 10 && $scope.selectedList.name && $scope.selectedList.category) {
        $scope.saveList($scope.selectedList);
      }
    }
    $('#new-value').focus();
  };

  $scope.reportList = function(list) {
    BotsSvc.reportList($scope.currentUser, list);
  };

  $scope.saveList = function(list) {
    list.values = list.values.filter(function(item) {
      return item.value;
    });
    if (list.values.length >= 10 && list.name && list.category) {
      $scope.saving = true;
      BotsSvc.saveList($scope.currentUser, list)
      .then(function(response) {
        $scope.getLists();
        $scope.selectList(response.data);
        $scope.saving = false;
      }, function(err) {
        console.error(err);
        $scope.saving = false;
      });
    } else if (list.values.length < 10) {
      alert('Lists must contain 10 or more values!');
    } else if (!list.name) {
      flash('#list-name');
    } else {
      flash('#list-category');
    }
  };

  function flash(element) {
    var color = $(element).css("background-color");
    $(element).animate({
      backgroundColor: "#FA8072"
    }, 100, function() {
      $(element).animate({
        backgroundColor: color
      }, 100);
    });
  }

  $scope.deleteList = function(list) {
    if (!list._id) {
      $scope.lists = $scope.lists.filter(function(list) { return list._id; });
      $scope.selectedList = null;
    } else {
      if (confirm('Are you sure you want to delete this list?')) {
        BotsSvc.deleteList(list)
        .then(function(response) {
          $scope.getLists();
          $scope.selectedList = null;
        });
      }
    }
  };

  $scope.listButtonClass = function(list) {
    var values = list.values;
    var blurbs = list.blurbs;
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

  $scope.searchListNames = function() {
    if ($scope.search && !$scope.savedSearch) {
      $scope.savedSearch = $scope.search;
      $scope.search = $selectedList.name;
    } else if ($scope.search) {
      $scope.search = $selectedList.name;
    }
  };


});
