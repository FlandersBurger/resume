/*jslint esversion: 6*/
angular.module('app')
  //AngularJs can't have an arrow function here
  .controller('TenThingsAdminCtrl', function($scope, BotSvc, UserSvc) {

    $scope.$on('login', _ => {
      if ($scope.currentUser.admin) {
        getUsers();
      }
    });

    $scope.getQueue = () => {
      $scope.loading = true;
      BotSvc.getQueue().then(response => {
        $scope.queue = response.data.replace('/n', '<br/>');
        $scope.loading = false;
      });
    };
    $scope.getQueue();

    BotSvc.getPause().then(response => {
      $scope.paused = response.data;
      console.log($scope.paused);
    });

    const getUsers = () => {
      $scope.loading = true;
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

    $scope.togglePause = user => {
      BotSvc.togglePause()
        .then(response => {
          $scope.paused = response.data;
          console.log($scope.paused);
        });
    };
  });