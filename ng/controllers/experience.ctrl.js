angular.module('app')
.controller('ExperienceCtrl', function ($scope) {

  $scope.getSkill = function(skillCode) {
    if (!$scope.skills) return;
    return $scope.skills.find(function(skill) {
      return skill.code === skillCode;
    });
  };

});
