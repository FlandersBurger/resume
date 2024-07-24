angular.module("app").controller("CharadesCtrl", function ($scope) {
  $scope.selectWord = (category) => {
    $scope.word = $scope.charades[category][Math.floor(Math.random() * $scope.charades[category].length)];
  };
});
