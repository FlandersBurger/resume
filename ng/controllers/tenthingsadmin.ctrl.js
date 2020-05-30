/*jslint esversion: 6*/
angular.module('app')
  //AngularJs can't have an arrow function here
  .controller('TenThingsAdminCtrl', function($scope, BotsSvc, UserSvc) {

    $scope.$on('login', _ => {
      if ($scope.currentUser.admin) {
        UserSvc.getUsers().then(response => {
          $scope.users = response.data;
          console.log($scope.users);
        });
      }
    });
  });