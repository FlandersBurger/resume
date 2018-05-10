angular.module('app')
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/home.html',
    //templateStyleUrl: 'assets/home.css'
  })
  .state('policy', {
    url: '/policy',
    templateUrl: '/policy.html',
    //templateStyleUrl: 'assets/home.css'
  })
  .state('print', {
    url: '/print',
    templateUrl: '/print.html'
  })
  .state('experience', {
    url: '/experience',
    controller: 'ExperienceCtrl',
    templateUrl: '/experience.html',
    //templateStyleUrl: 'assets/experience.css'
  })
  .state('skills', {
    url: '/skills',
    controller: 'SkillsCtrl',
    templateUrl: '/skills.html',
    //templateStyleUrl: 'assets/skills.css'
  })
  .state('hobbies', {
    url: '/hobbies',
    controller: 'HobbiesCtrl',
    templateUrl: '/hobbies.html',
    //templateStyleUrl: 'assets/hobbies.css'
  })
  .state('contact', {
    url: '/contact',
    controller: 'ContactCtrl',
    templateUrl: '/contact.html',
    //templateStyleUrl: 'assets/contact.css'
  })
  .state('workout', {
    url: '/workout',
    controller: 'WorkoutCtrl',
    templateUrl: '/workout.html'
  })
  .state('posts', {
    url: '/posts',
    controller: 'PostsCtrl',
    templateUrl: '/posts.html'
  })
  .state('profile', {
    url: '/profile',
    controller: 'ProfileCtrl',
    templateUrl: '/profile.html',
    //templateStyleUrl: 'assets/contact.css'
  })
  .state('lists', {
    url: '/lists',
    controller: 'ListsCtrl',
    templateUrl: 'lists.html'
  })
  .state('prioritize', {
    url: '/prioritize',
    controller: 'PrioritizeCtrl',
    templateUrl: 'prioritize.html'
  })
  .state('explosions', {
    url: '/explosions',
    controller: 'ExplosionsCtrl',
    templateUrl: 'explosions.html'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
