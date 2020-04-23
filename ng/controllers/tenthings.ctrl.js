/*jslint esversion: 6*/
angular.module('app')
//AngularJs can't have an arrow function here
.controller('TenThingsCtrl', function($scope, BotsSvc) {

  $scope.categories = [
    'Music',
    'Television',
    'Movies',
    'Entertainment',
    //'Culture',
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
  $scope.keyDown = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 9:
        if ($("#new-blurb").is(":focus")) {
          setTimeout(() => {
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

  $scope.categoryFilters = $scope.categories.map(category => category);
  $scope.categoryFilters.push('All');
  $scope.categoryFilters.push('Blank');
  $scope.categoryFilter = 'All';

  $scope.setCategoryFilter = category => {
    $scope.categoryFilter = category;
  };
  $scope.setUserFilter = user => {
    $scope.userFilter = user;
  };

  $scope.filteredLists = () => {
    if (!$scope.lists) return [];
    return $scope.lists.filter(({category, creator}) => {
      if ($scope.categoryFilter === 'All' && $scope.userFilter === 'All') {
        return true;
      } else if ($scope.categoryFilter !== 'All' && $scope.userFilter === 'All') {
        if (category) {
          return category === $scope.categoryFilter;
        } else {
          return $scope.categoryFilter === 'Blank';
        }
      } else if ($scope.categoryFilter === 'All' && $scope.userFilter !== 'All') {
        return creator === $scope.userFilter;
      } else {
        if (category) {
          return category === $scope.categoryFilter && creator === $scope.userFilter;
        } else {
          return $scope.categoryFilter === 'Blank' && creator === $scope.userFilter;
        }
      }
    }).filter(({name}) => name.toLowerCase().indexOf($scope.searchName.toLowerCase()) >= 0);
  };

  $scope.$on('login', _ => {
    $scope.getLists();
  });


  $scope.sort = sortBy => {
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

  $scope.getCategoryCount = category => {
    if (!$scope.lists) return 0;
    return $scope.lists.filter(list => (category === 'All' || list.category === category) && ($scope.userFilter === 'All' || list.creator.username === $scope.userFilter)).length;
  };

  $scope.getLists = () => {
    $scope.loading = true;
    BotsSvc.getLists($scope.currentUser)
    .then(({data}) => {
      $scope.lists = data;
      console.log($scope.lists[0]);
      $scope.userFilters = {};
      $scope.userFilters.All = $scope.lists.length;
      $scope.userFilters = $scope.lists.sort((list1, list2) => list1.creator > list2.creator).reduce((users, {creator}) => {
        if (!users[creator]) users[creator] = 0;
        users[creator]++;
        return users;
      }, $scope.userFilters);
      $scope.userCount = Object.keys($scope.userFilters).length;
      $scope.userFilter = 'All';
      $scope.loading = false;
    });
  };

  $scope.selectList = list => {
    BotsSvc.getList(list)
    .then(({data}) => {
      $scope.selectedList = data;
    });
  };

  $scope.selectCategory = category => {
    $scope.selectedList.category = category;
    $scope.selectingCategory = false;
  };

  $scope.addList = () => {
    $scope.selectedList = {
      name: '',
      creator: $scope.currentUser._id,
      date: new Date(),
      values: [],
      answers: 0
    };
  };

  $scope.addValue = () => {
    if ($scope.newItem.value) {
      if (_.some($scope.selectedList.values, value => value == $scope.newItem.value)) {
        alert(`${$scope.newItem.value} is already in the list`);
      } else {
        $scope.newItem.creator = $scope.currentUser._id;
        $scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem)));
        $scope.selectedList.answers++;
        $scope.newItem.value = '';
        $scope.newItem.blurb = '';
        if ($scope.selectedList.values.length >= 10 && $scope.selectedList.name && $scope.selectedList.category) {
          $scope.saveList($scope.selectedList);
        }
      }
    }
    $('#new-value').focus();
  };

  $scope.reportList = list => {
    BotsSvc.reportList($scope.currentUser, list);
  };

  $scope.saveList = list => {
    list.values = list.values.filter(({value}) => value);
    if (list.values.length >= 10 && list.name && list.category) {
      $scope.saving = true;
      BotsSvc.saveList($scope.currentUser, list)
      .then(({data}) => {
        if (!$scope.selectedList._id) $scope.lists.unshift(data);
        else {
          for (let i = 0; i < $scope.lists.length; i++) {
            if ($scope.lists[i]._id === data._id) {
              $scope.lists[i] = data;
              break;
            }
          }
        }
        $scope.selectList(list);
        $scope.saving = false;
      }, err => {
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
    const color = $(element).css("background-color");
    $(element).animate({
      backgroundColor: "#FA8072"
    }, 100, () => {
      $(element).animate({
        backgroundColor: color
      }, 100);
    });
  }

  $scope.deleteList = list => {
    if (!list._id) {
      $scope.lists = $scope.lists.filter(({_id}) => _id);
      $scope.selectedList = null;
    } else {
      if (confirm('Are you sure you want to delete this list?')) {
        BotsSvc.deleteList(list)
        .then(response => {
          $scope.getLists();
          $scope.selectedList = null;
        });
      }
    }
  };

  $scope.listButtonClass = list => {
    const values = list.values;
    const blurbs = list.blurbs;
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
