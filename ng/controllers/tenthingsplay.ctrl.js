angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsPlayCtrl", function ($scope, TenThingsSvc, GameSvc) {
    $scope.keyDown = (e) => {
      switch (e.keyCode) {
        // Enter
        case 13:
          $scope.checkAnswer();
          break;
        default:
      }
      // use e.keyCode
    };

    const getData = async () => {
      if ($scope.currentUser.admin) {
        const { data: list } = await TenThingsSvc.getRandomList();
        $scope.list = list;
        $scope.values = _.sampleSize(list.values, 10);
        console.log("list", $scope.list);
        console.log("value", $scope.values);
        $scope.$apply();
      }
    };

    $scope.checkAnswer = async () => {
      const result = await GameSvc.fuzzyMatch(
        $scope.values.map(({ value }) => value),
        $scope.guess,
      );
      if (result.data.value) {
        const index = $scope.values.findIndex(({ value }) => value === result.data.value);
        $scope.values[index].guessed = true;
      }
      $scope.guess = "";
      $scope.$apply();
    };

    $scope.$watch("currentUser", getData);
  });
