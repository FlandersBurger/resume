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
      if ($scope.currentUser?.admin) {
        const { data: game } = await GameSvc.getTenthings();
        $scope.game = game;
        $scope.list = game.list;
        $scope.values = game.list.values;
        console.log("game", game);
        $scope.$apply();
      }
    };

    $scope.checkAnswer = async () => {
      const answer = $scope.guess;
      $scope.guess = "";
      await GameSvc.answerTenthings(undefined, answer);
    };

    $scope.getHint = async () => {
      await GameSvc.getTenthingsHint();
    };

    $scope.skipList = async () => {
      await GameSvc.skipTenthingsList();
    };

    $scope.$watch("currentUser", getData);

    $scope.$on("ws:tenthings_message", function (_, data) {
      $scope.$apply(function () {
        console.log(data);
        if (data.message) $scope.toast(data.message);
        getData();
      });
    });
  });
