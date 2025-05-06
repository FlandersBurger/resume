angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsPlayCtrl", function ($scope, GameSvc) {
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
        const { data: game } = await GameSvc.getTenthings();
        console.log("game", game);
        $scope.list = game.list;
        $scope.values = _.sampleSize(game.list.values, 10);
        console.log("list", $scope.list);
        console.log("value", $scope.values);
        $scope.$apply();
      }
    };

    $scope.checkAnswer = async () => {
      await GameSvc.answerTenthings(undefined, $scope.guess);
      $scope.guess = "";
    };

    $scope.getHint = async () => {
      await GameSvc.getTenthingsHint();
    };

    $scope.$watch("currentUser", getData);

    $scope.$on("ws:tenthings_message", function () {
      $scope.$apply(function () {
        getData();
      });
    });
  });
