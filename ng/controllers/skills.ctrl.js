angular.module('app')
.controller('SkillsCtrl', function ($scope, $window) {

  $scope.selectedSkill = 0;
  $scope.skillsVisible = false;
  $scope.projects = [];

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];

  $.getJSON('/experience.json', function( data ) {
    $scope.projects = data.reduce((projects, employer) => {
      if (employer.projects) return employer.projects.concat(projects);
      else return projects;
    }, {});
  });

  $scope.filteredProjects = () => $scope.projects
    .filter((project) => project.skills && project.skills.includes($scope.selectedSkill.code))

  $.getJSON('/skills.json', function( data ) {

    const skills = data
    .filter((skill) => skill.enabled)

    $scope.categories = skills
    .reduce(function(categories, skill) {
      if (!categories[skill.category]) {
        categories[skill.category] = [skill]
      } else {
        categories[skill.category].push(skill)
      }
      return categories;
    }, {});

    $scope.setSelectedSkill = function (skill) {
      $scope.selectedSkill = skill;
      $scope.selectedSkill.chartOptions = {
        cutoutPercentage : 80,
        circumference: 2 * Math.PI,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false
        }
      };
      $scope.selectedSkill.chartStyle = {
        'background-image': 'url(/skills/' + $scope.selectedSkill.image + ')',
        'background-repeat': 'no-repeat',
        'background-size': '60%',
        'background-position': '50% 50%'
      };
    };

    $scope.setSelectedSkill($scope.skills[0]);

    $scope.$apply();
  });

});
