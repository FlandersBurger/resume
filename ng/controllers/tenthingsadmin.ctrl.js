/*jslint esversion: 6*/
angular.module('app')
  //AngularJs can't have an arrow function here
  .controller('TenThingsAdminCtrl', function($scope, BotsSvc, UserSvc) {

    $scope.$on('login', _ => {
      if ($scope.currentUser.admin) {
        getUsers();
      }
    });

    const getUsers = () => {
      UserSvc.getUsers().then(response => {
        $scope.users = response.data.filter(user => !user.admin);
        $scope.loading = false;
      });
    };

    $scope.toggleBan = user => {
      $scope.loading = true;
      UserSvc.toggleBan(user._id)
        .then(response => {
          getUsers();
        });
    };
  });