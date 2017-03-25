angular.module('app')
.controller('SkillsCtrl', function ($scope, $window) {

    $scope.selectedSkill = 0;
    $scope.skillsVisible = false;


  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];

  $.getJSON('../assets/skills.json', function( data ) {
    $scope.skills = data.filter(function(skill) {
      return skill.enabled;
    });

    $scope.getSelectedSkill = function () {
      return $scope.skills[$scope.selectedSkill];
    };

    $scope.getSelectedSkillText = function () {
      return $scope.skills[$scope.selectedSkill].description;
    };

    $scope.setSelectedSkill = function (i) {
      $scope.selectedSkill = i;
    };

      /*
      half circle skill wheel that didn't turn out great
      return {
        display: $scope.skillsVisible ? 'block' : 'none',
        position: 'absolute',
        left: $scope.wheelWidth / 2 * Math.cos(i * (Math.PI / ($scope.skills.length - 1))) + $scope.wheelWidth / 2 - $scope.wheelWidth * 0.025,
        top: Math.sin(i * (Math.PI / ($scope.skills.length - 1))) * $('.selected-skill').height() * 2.5,
        width: $scope.wheelWidth * 0.05,
        height: $scope.wheelWidth * 0.05
      };
      */

    $scope.$apply();
  });

});
