angular.module('app')
.controller('HobbiesCtrl', function ($scope, $window) {

  $scope.hobbySelectorVisible = false;

  $.getJSON('https://www.reddit.com/user/belgocanadian/about/.json', function (response) {
    console.log(response.data);
  });

  $.getJSON('../assets/hobbies.json', function( data ) {
    $scope.hobbies = data;
    $scope.selectedHobby = $scope.hobbies[0];
    $scope.$apply();
  });


  $scope.selectHobby = function (hobby) {
    $scope.selectedHobby = hobby;
    $scope.hobbySelectorVisible = false;
  };
});
