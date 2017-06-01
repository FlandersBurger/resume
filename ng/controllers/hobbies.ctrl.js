angular.module('app')
.controller('HobbiesCtrl', function ($scope, $window) {

  $scope.hobbySelectorVisible = false;

  $.getJSON('https://www.reddit.com/user/belgocanadian/about/.json', function (response) {
    //console.log(response.data);
  });

  $scope.selectedHobby = $scope.hobbies[0];

  $scope.selectHobby = function (hobby) {
    $scope.selectedHobby = hobby;
    $scope.hobbySelectorVisible = false;
  };

  $scope.showHobby = function (value, index, array) {
    if (!value.images) return false;
    return value.images.length > 0;
  };
});
