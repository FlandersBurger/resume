angular.module('app')
.controller('SkillsCtrl', function ($scope) {

  $scope.skills = [
    {
      "name": "AngularJS",
      "description": "",
      "image": "angular.png"
    },
    {
      "name": "NodeJS",
      "description": "",
      "image": "node.png"
    },
    {
      "name": "SQL Server",
      "description": "",
      "image": "sql.png"
    },
    {
      "name": "MS ASP",
      "description": "",
      "image": "aspnet.png"
    },
    {
      "name": "JQuery",
      "description": "",
      "image": "jquery.png"
    },
    {
      "name": "Java",
      "description": "",
      "image": "java.png"
    },
    {
      "name": "MySQL",
      "description": "",
      "image": "mysql.png"
    },
    {
      "name": "Symantec",
      "description": "",
      "image": "symantec.png"
    },
    {
      "name": "Redis",
      "description": "",
      "image": "redis.png"
    },
    {
      "name": "WordPress",
      "description": "",
      "image": "wordpress.png"
    },
    {
      "name": "MS IIS",
      "description": "",
      "image": "iis.png"
    },
    {
      "name": "MongoDB",
      "description": "",
      "image": "mongodb.png"
    },
    {
      "name": "MS Dynamics",
      "description": "",
      "image": "msdynamics.png"
    },
    {
      "name": "HTML5",
      "description": "",
      "image": "trinity.png"
    },
    {
      "name": "Google Webmaster",
      "description": "",
      "image": "googlewebmaster.png"
    },
    {
      "name": "PhoneGap",
      "description": "",
      "image": "phonegap.png"
    },
    {
      "name": "MS Partner",
      "description": "",
      "image": "mspartner.png"
    }
  ];

  $scope.windowHeight = $(window).height() * 0.75;
  $scope.selectedSkill = 0;

  $scope.getSkillWheelSize = function () {
    return {
      width: $scope.windowHeight,
      height: $scope.windowHeight
    };
  };

  $scope.getPosition = function (i) {
    i = ((i + $scope.selectedSkill >= $scope.skills.length) ? i - $scope.skills.length : i) + $scope.selectedSkill;
    return {
      position: 'absolute',
      left: $scope.windowHeight / 2 * Math.cos(i * 2 * Math.PI / $scope.skills.length) + $scope.windowHeight / 2,
      top: $scope.windowHeight / 2 * Math.sin(i * 2 * Math.PI / $scope.skills.length) + $scope.windowHeight / 2
    };
  };

});
