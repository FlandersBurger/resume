angular.module('app')
.controller('ExperienceCtrl', function ($scope) {

  $scope.jobs = [
    {
      "company": "Imprint Plus",
      "startDate": new Date('7/22/2011'),
      "image": "ip.png"
    },
    {
      "company": "Hewlet-Packard",
      "startDate": new Date('01/10/2004'),
      "endDate": new Date('01/12/2005'),
      "image": "hp.png"
    }
  ]

});
