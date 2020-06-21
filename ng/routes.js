angular.module('app')
  .config(function($stateProvider, $urlRouterProvider, $urlServiceProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');
    $urlServiceProvider.config.strictMode(false);

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html'
      })
      .state('policy', {
        url: '/policy',
        templateUrl: '/policy.html'
      })
      .state('print', {
        url: '/print',
        templateUrl: '/print.html'
      })
      .state('experience', {
        url: '/experience',
        controller: 'ExperienceCtrl',
        templateUrl: '/experience.html'
      })
      .state('skills', {
        url: '/skills',
        controller: 'SkillsCtrl',
        templateUrl: '/skills.html'
      })
      .state('hobbies', {
        url: '/hobbies',
        controller: 'HobbiesCtrl',
        templateUrl: '/hobbies.html'
      })
      .state('contact', {
        url: '/contact',
        controller: 'ContactCtrl',
        templateUrl: '/contact.html'
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
        templateUrl: '/profile.html'
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
      .state('bubbles', {
        url: '/bubbles',
        controller: 'BubblesCtrl',
        templateUrl: 'bubbles.html'
      })
      .state('asteroids', {
        url: '/asteroids',
        controller: 'AsteroidsCtrl',
        templateUrl: 'asteroids.html'
      })
      .state('lemmings', {
        url: '/lemmings',
        controller: 'LemmingsCtrl',
        templateUrl: 'lemmings.html'
      })
      .state('bots', {
        url: '/bots',
        controller: 'TenThingsCtrl',
        templateUrl: 'tenthings.html'
      })
      .state('tenthings', {
        url: '/tenthings',
        controller: 'TenThingsCtrl',
        templateUrl: 'tenthings.html'
      })
      .state('tenthings-admin', {
        url: '/tenthings-admin',
        controller: 'TenThingsAdminCtrl',
        templateUrl: 'tenthings-admin.html'
      })
      .state('quiz-google', {
        url: '/google',
        controller: 'QuizGoogleCtrl',
        templateUrl: 'quizzes/google.html'
      })
      .state('quiz-logos', {
        url: '/logos',
        controller: 'QuizLogosCtrl',
        templateUrl: 'quizzes/logos.html'
      })
      .state('quiz-animals', {
        url: '/animals',
        controller: 'QuizAnimalsCtrl',
        templateUrl: 'quizzes/animals.html'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  });