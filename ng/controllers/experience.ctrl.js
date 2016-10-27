angular.module('app')
.controller('ExperienceCtrl', function ($scope) {

  $.getJSON('../assets/experience.json', function( data ) {
    $scope.jobs = data;
    $scope.jobs.forEach(function (job) {
      job.startDate = new Date(job.startDate);
      if (job.endDate) job.endDate = new Date(job.endDate);
    });
    $scope.$apply();
  });

  $scope.getTimeSpan = function (job) {
    return job.startDate.getFullYear() + (job.endDate ? (' - ' + job.endDate.getFullYear()) : ' - Today');
  };

});
