angular.module('app')
.controller('SkillsCtrl', function ($scope, $window) {

  $scope.selectedSkill = 0;
  $scope.skillsVisible = false;

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];

  $.getJSON('/skills.json', function( data ) {
    $scope.skills = data.filter(function(skill) {
      return skill.enabled;
    });

    $scope.setSelectedSkill = function (skill) {
      $scope.selectedSkill = skill;
      $scope.selectedSkill.chartOptions = {
        cutoutPercentage : 80,
        circumference: 2 * Math.PI * $scope.selectedSkill.percentage / 100,
        maintainAspectRatio: false
      };
      $scope.selectedSkill.chartStyle = {
        'background-image': 'url(/skills/' + $scope.selectedSkill.image + ')',
        'background-repeat': 'no-repeat',
        'background-size': '60%',
        'background-position': '50% 50%'
      };
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
