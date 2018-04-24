angular.module('app')
.controller('RegisterCtrl', function ($scope, $location, UserSvc) {

  $scope.register = function (username, password, confirmPassword) {
    if (password == confirmPassword) {
      UserSvc.createUser(username, password)
      .then(function (response) {
        $scope.$emit('login', response.data);
        $location.path('/');
      });
    } else {
      var originalBg = $(".password").css("backgroundColor");
      $(".password").animate({ backgroundColor: "#FFB6C1" }, 200).animate({ backgroundColor: originalBg }, 200);
    }
  };
});
