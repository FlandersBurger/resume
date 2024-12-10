angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsGameCtrl", function ($scope, $stateParams, TenThingsSvc, UserSvc) {
    const getData = async () => {
      if ($scope.currentUser.admin) {
        const { data: users } = await UserSvc.getUsers();
        $scope.users = users.filter((user) => !user.admin);
        const { data: categories } = await TenThingsSvc.getCategories();
        $scope.categories = categories;
        if ($stateParams.game) {
          TenThingsSvc.getGame($stateParams.game).then((response) => {
            $scope.game = response.data;
            console.log($scope.game);
          });
        }
      }
    };

    $scope.setCategory = async (category) => {
      const { data: disabledCategories } = await TenThingsSvc.updateGameCategory($stateParams.game, category);
      $scope.game.disabledCategories = disabledCategories;
      console.log(disabledCategories.find((c) => c === category));
      $scope.$apply();
    };

    $scope.$watch("currentUser", getData);
  });
