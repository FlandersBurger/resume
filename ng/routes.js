angular.module('app')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'pages/home.html',
    templateStyleUrl: 'assets/home.css'
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
  })
  .state('contact', {
    url: '/contact',
    controller: 'ContactCtrl',
    templateUrl: 'pages/contact.html',
    templateStyleUrl: 'assets/contact.css'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
