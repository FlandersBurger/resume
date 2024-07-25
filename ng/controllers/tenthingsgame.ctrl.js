angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsGameCtrl", function ($scope, $stateParams, TenThingsSvc, UserSvc) {
    const getUsers = () => {
      $scope.loading = true;
      UserSvc.getUsers().then((response) => {
        $scope.users = response.data.filter((user) => !user.admin);
        $scope.loading = false;
      });
    };

    $scope.$on("login", () => {
      if ($scope.currentUser.admin) {
        getUsers();
      }
    });

    if ($stateParams.game) {
      TenThingsSvc.getGame($stateParams.game).then((response) => {
        $scope.game = response.data;
        console.log($scope.game);
      });
    }
  });
