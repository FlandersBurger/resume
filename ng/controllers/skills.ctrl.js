angular.module('app')
.controller('SkillsCtrl', function ($scope, $window) {

    $scope.wheelWidth = $('.skill-wheel').width();
    $scope.selectedSkill = 0;
    $scope.skillsVisible = false;

    var w = angular.element($window);
    w.bind('resize', function () {
      $scope.wheelWidth = $('.skill-wheel').width();
      $scope.$apply();
    });


  $.getJSON('../assets/skills.json', function( data ) {
    $scope.skills = data;

    $scope.getSelectedSkill = function () {
      return $scope.skills[$scope.selectedSkill];
    };

    $scope.getSelectedSkillText = function () {
      return $scope.skills[$scope.selectedSkill].description.filter(function(desc) { return desc.language === $scope.selectedLanguage.code; })[0].text;
    };

    $scope.setSelectedSkill = function (i) {
      $scope.selectedSkill = i;
    };

    $scope.getPosition = function (i) {
      return {
        display: $scope.skillsVisible ? 'block' : 'none',
        position: 'absolute',
        left: $scope.wheelWidth / 2 * Math.cos(i * (Math.PI / ($scope.skills.length - 1))) + $scope.wheelWidth / 2 - $scope.wheelWidth * 0.025,
        top: Math.sin(i * (Math.PI / ($scope.skills.length - 1))) * $('.selected-skill').height() * 1.5,
        width: $scope.wheelWidth * 0.05,
        height: $scope.wheelWidth * 0.05
      };
    };
  });

});
