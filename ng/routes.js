angular.module('app')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
  })
  .state('experience', {
    url: '/experience',
    controller: 'ExperienceCtrl',
    templateUrl: 'pages/experience.html',
    templateStyleUrl: 'assets/experience.css'
  })
  .state('skills', {
    url: '/skills',
    controller: 'SkillsCtrl',
    templateUrl: 'pages/skills.html',
    templateStyleUrl: 'assets/skills.css'
  })
  .state('hobbies', {
    url: '/hobbies',
    controller: 'HobbiesCtrl',
    templateUrl: 'pages/hobbies.html',
    templateStyleUrl: 'assets/hobbies.css'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
