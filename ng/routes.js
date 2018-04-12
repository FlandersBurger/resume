angular.module('app')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/top-priority');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'pages/home.html',
    //templateStyleUrl: 'assets/home.css'
  })
  .state('print', {
    url: '/print',
    templateUrl: 'pages/print.html'
  })
  .state('experience', {
    url: '/experience',
    controller: 'ExperienceCtrl',
    templateUrl: 'pages/experience.html',
    //templateStyleUrl: 'assets/experience.css'
  })
  .state('skills', {
    url: '/skills',
    controller: 'SkillsCtrl',
    templateUrl: 'pages/skills.html',
    //templateStyleUrl: 'assets/skills.css'
  })
  .state('hobbies', {
    url: '/hobbies',
    controller: 'HobbiesCtrl',
    templateUrl: 'pages/hobbies.html',
    //templateStyleUrl: 'assets/hobbies.css'
  })
  .state('contact', {
    url: '/contact',
    controller: 'ContactCtrl',
    templateUrl: 'pages/contact.html',
    //templateStyleUrl: 'assets/contact.css'
  })
  .state('workout', {
    url: '/workout',
    controller: 'WorkoutCtrl',
    templateUrl: 'pages/workout.html'
  })
  .state('top-priority', {
    url: '/top-priority',
    controller: 'TopPriorityCtrl',
    templateUrl: 'pages/top-priority.html'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
