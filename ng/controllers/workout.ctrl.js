angular.module('app')
.controller('WorkoutCtrl', function ($scope) {

  $scope.timeRemaining = 0;
  $scope.timeExercising = 30;
  $scope.timeResting = 10;
  $scope.rest = false;

  var sounds = {
    on: new Audio('on.wav'),
    off: new Audio('off.wav'),
    switch: new Audio('switch.wav'),
  };


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

  $scope.progress = function() {
    return (exercises.length - Math.floor($scope.timeRemaining / ($scope.timeExercising + $scope.timeResting))) + '/' + exercises.length;
  };

  $scope.workout = function() {
    var excerciseTime = $scope.timeExercising + $scope.timeResting;
    if (!$scope.timeRemaining) {
      $scope.timeRemaining = exercises.length * excerciseTime;
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
        var currentExercise = Math.floor($scope.timeRemaining / excerciseTime);
        var timer = $scope.timeRemaining - currentExercise * excerciseTime;
        $scope.timer = timer > $scope.timeExercising ? timer - $scope.timeExercising : timer;
        if (timer > $scope.timeExercising) {
          $scope.rest = true;
        } else {
          $scope.rest = false;
        }
        $scope.exercise = exercises[exercises.length - currentExercise - 1];
        if (timer === $scope.timeExercising) {
          sounds.on.play();
        } else if (timer === 0) {
          sounds.off.play();
        } else if ($scope.exercise.split && timer === Math.floor($scope.timeExercising / 2)) {
          sounds.switch.play();
        }
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
