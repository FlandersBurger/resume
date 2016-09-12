angular.module('app')
.controller('ExperienceCtrl', function ($scope) {

  $scope.jobs = [
    {
      "company": "Imprint Plus",
      "description": "Software & Data Analyst",
      "startDate": new Date('22/07/2011'),
      "image": "ip.png",
      "skills": [
        "sql", "angular", "node", "js"
      ]
    },
    {
      "company": "BC Hydro",
      "startDate": new Date('01/05/2010'),
      "endDate": new Date('21/07/2011'),
      "image": "bchydro.png"
    },
    {
      "company": "Acer @ VANOC",
      "startDate": new Date('01/02/2009'),
      "endDate": new Date('01/04/2010'),
      "image": "acer.png"
    },
    {
      "company": "Hewlet-Packard",
      "startDate": new Date('01/10/2004'),
      "endDate": new Date('01/12/2005'),
      "image": "hp.png"
    }
  ];

});
