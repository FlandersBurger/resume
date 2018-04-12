angular.module('app')
.controller('WorkoutCtrl', function ($scope) {

  $scope.timeRemaining = 0;
  $scope.rest = false;

  var exercises = [
    {name: 'Jumping Jacks', split: false},
    {name: 'Wall Sit', split: false},
    {name: 'Push-Up', split: false},
    {name: 'Crunch', split: false},
    {name: 'Step-Up', split: true},
    {name: 'Squat', split: false},
    {name: 'Triceps Dip', split: false},
    {name: 'Plank', split: false},
    {name: 'High Knees', split: false},
    {name: 'Lunge', split: false},
    {name: 'Push-Up with Rotation', split: false},
    {name: 'Side Plank', split: true}
  ];

    var exercising;

  $scope.workout = function() {
    if (!$scope.timeRemaining) {
      $scope.timeRemaining = exercises.length * 40;
      exercising = setInterval(function() {
        $scope.timeRemaining--;
        if ($scope.timeRemaining === 0) {
          $scope.exercise = {name: 'Finished! Congrats!', split: false};
          $scope.timer = '';
          $scope.timeRemaining = 0;
          $scope.rest = false;
          $scope.$apply();
          return clearInterval(exercising);
        }
        var currentExercise = Math.floor($scope.timeRemaining / 40);
        var timer = $scope.timeRemaining - currentExercise * 40;
        $scope.timer = timer > 30 ? timer - 30 : timer;
        if (timer > 30) {
          $scope.rest = true;
        } else {
          $scope.rest = false;
        }
        $scope.exercise = exercises[exercises.length - currentExercise - 1];
        $scope.$apply();
      }, 1000);
    } else {
      clearInterval(exercising);
      $scope.timer = '';
      $scope.timeRemaining = 0;
      $scope.rest = false;
      $scope.exercise = {name: '', split: false};
    }
  };

});
