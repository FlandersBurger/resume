angular.module('app')
.controller('ListsCtrl', function ($scope, $location, CategoriesSvc) {

  $scope.showCategory = true;

  $scope.init = function () {
    CategoriesSvc.getCategories()
    .success(function (categories) {
      $scope.categories = categories;
      $scope.tasks = [];
      for (var i = 0; i < $scope.categories.length; i++) {
        for (var j = 0; j < $scope.categories[i].tasks.length; j++) {
          $scope.tasks.push({
            "category": $scope.categories[i].name,
            "task": $scope.categories[i].tasks[j].name
          });
        }
      }
    });
  };

  $scope.selectCategory = function(category) {
    $scope.selectedCategory = category;
    $scope.selectedTasks = [];
    $scope.selectableTasks = [];
    for (var i = 0; i < $scope.selectedCategory.tasks.length; i++) {
      $scope.selectableTasks.push($scope.selectedCategory.tasks[i]);
    }
    $scope.showCategory = false;
    $scope.enteredCategory = null;
  };

  $scope.newCategory = function (category) {
    var found = false;
    for (var i = 0; i < $scope.categories.length; i++) {
      if ($scope.categories[i].name === category) {
        $scope.selectCategory($scope.categories[i]);
        found = true;
      }
    }
    if (!found) {
      CategoriesSvc.addCategory({
        category: category
      }).success(function (category) {
        $scope.init();
        $scope.selectCategory(category);
      });
    }
    $scope.enteredCategory = null;
  };

  $scope.newTask = function (task) {
    var found = false;
    for (var i = 0; i < $scope.selectedCategory.tasks.length; i++) {
      if ($scope.selectedCategory.tasks[i].name === task) {
        found = true;
        $scope.selectTask($scope.selectedCategory.tasks[i]);
      }
    }
    if (!found) {
      CategoriesSvc.addTask($scope.selectedCategory.name, {
        task: task
      }).success(function () {
        $scope.selectedCategory.tasks.push({ name: task });
        $scope.addTask($scope.selectedTasks, $scope.selectedCategory.tasks[$scope.selectedCategory.tasks.length - 1]);
      });
    }
    $scope.enteredTask = null;
  };

  $scope.selectTask = function (task) {
    $scope.addTask($scope.selectedTasks, task);
    $scope.removeTask($scope.selectableTasks, task);
    $scope.enteredTask = null;
  };

  $scope.unselectTask = function (task) {
    $scope.addTask($scope.selectableTasks, task);
    $scope.removeTask($scope.selectedTasks, task);
  };

  $scope.addTask = function(taskList, task) {
    taskList.push(task);
  };

  $scope.removeTask = function(taskList, task) {
    taskList.splice(taskList.indexOf(task), 1);
  };

  $scope.startPrioritizing = function() {
    CategoriesSvc.setPriorityList($scope.selectedTasks);
    $location.path('/prioritize');
  };

  $scope.getQuestions = function() {
    if (!$scope.selectedTasks) return '';
    var counter = 0;
    for (var i = $scope.selectedTasks.length - 1; i > 0; i--) {
      counter += i;
    }
    return counter;
  };

});
