angular.module('app')
.controller('LoginCtrl', function ($scope, $location, UserSvc) {

  $scope.login = function (username, password) {
    UserSvc.login(username, password)
    .then(function (response) {
      console.log(response);
      $scope.$emit('login', response.data);
      $location.path('/');
    }, function () {
      $scope.$emit('popup', {
        message: 'Login Failed',
        type: 'alert-danger'
      });
    });

  };

});
