angular.module('app')
.controller('SkillsCtrl', function ($scope, $window) {

  $scope.skills = [
    {
      "name": "AngularJS",
      "description": [
        {
          "language" : "EN",
          "text" : "AngularJS has quickly become my favourite front-end web app framework, so much so that I can't imagine ever creating another website without it. In fact, this website relies heavily on AngularJS. The crown-jewel of my AngularJS experience is found at https://npgcloud.com, a web app where high profile customers such as Hudson Bay Company, 7-Eleven and Sprint go to design and print their name badges."
        },
        {
          "language" : "NL",
          "text" : "AngularJS is snel een van mijn favoriete front-end web app frameworks geworden, zo snel dat ik me zelf niet kan voorstellen of ik er zonder nog een site zal maken. Deze site gebruikt nogal wat AngularJS. Mijn AngularJS ervaring heeft een hoogtepunt bereikt met https://npgcloud.com, een web app waar welbekende bedrijven zoals Hudson Bay Company, 7-Eleven en Sprint gaan om hun badges te ontwerpen en te printen"
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "angular.png"
    },
    {
      "name": "NodeJS",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "node.png"
    },
    {
      "name": "SQL Server",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "sql.png"
    },
    {
      "name": "MS ASP",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "aspnet.png"
    },
    {
      "name": "JQuery",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "jquery.png"
    },
    {
      "name": "Java",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "java.png"
    },
    {
      "name": "MySQL",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "mysql.png"
    },
    {
      "name": "Symantec",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "symantec.png"
    },
    {
      "name": "Redis",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "redis.png"
    },
    {
      "name": "WordPress",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "wordpress.png"
    },
    {
      "name": "MS IIS",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "iis.png"
    },
    {
      "name": "MongoDB",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "mongodb.png"
    },
    {
      "name": "MS Dynamics",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "msdynamics.png"
    },
    {
      "name": "HTML5",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "trinity.png"
    },
    {
      "name": "Google Webmaster",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "googlewebmaster.png"
    },
    {
      "name": "PhoneGap",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "phonegap.png"
    },
    {
      "name": "MS Partner",
      "description": [
        {
          "language" : "EN",
          "text" : ""
        },
        {
          "language" : "NL",
          "text" : ""
        },
        {
          "language" : "FR",
          "text" : ""
        }
      ],
      "image": "mspartner.png"
    }
  ];

  $scope.wheelWidth = $('.skill-wheel').width();
  $scope.selectedSkill = 0;
  $scope.skillsVisible = false;

  var w = angular.element($window);
  w.bind('resize', function () {
    $scope.wheelWidth = $('.skill-wheel').width();
    $scope.$apply();
  });

  $scope.getSelectedSkill = function () {
    return $scope.skills[$scope.selectedSkill];
  };

  $scope.getSelectedSkillText = function () {
    return $scope.skills[$scope.selectedSkill].description.filter(function(desc) { return desc.language === $scope.selectedLanguage.code; })[0].text;
  };

  $scope.setSelectedSkill = function (i) {
    $scope.selectedSkill = i;
    $scope.skillsVisible = !$scope.skillsVisible;
  };

  $scope.getPosition = function (i) {
    return {
      position: 'absolute',
      left: $scope.wheelWidth / 2 * Math.cos(i * (Math.PI / ($scope.skills.length - 1))) + $scope.wheelWidth / 2 - $scope.wheelWidth * 0.025,
      top: Math.sin(i * (Math.PI / ($scope.skills.length - 1))) * $('.selected-skill').height() * 2,
      width: $scope.wheelWidth * 0.05,
      height: $scope.wheelWidth * 0.05
    };
  };

});
