angular.module('app')
  .service('BotsSvc', function($http) {

    var svc = this;

    svc.getQueue = function() {
      return $http.get(`/bots/tenthings/queue`);
    };

    svc.getLists = function(user) {
      return $http.get(`/api/bots/lists`);
    };

    svc.getCategories = () => {
      return $http.get(`/api/bots/categories`);
    };

    svc.getLanguages = () => {
      return $http.get(`/api/bots/languages`);
    };

    svc.getList = function(list) {
      return $http.get('/api/bots/lists/' + list._id);
    };

    svc.saveList = function(user, list) {
      return $http.put('/api/bots/lists', {
        user: user,
        list: list
      });
    };

    svc.reportList = function(user, list) {
      $http.get('/api/bots/lists/' + list._id + '/report/' + user._id);
    };

    svc.deleteList = function(list) {
      return $http.delete('/api/bots/lists/' + list._id);
    };

    svc.getMoviePics = function(list) {
      return $http.get(`/api/bots/lists/${list._id}/movies`);
    };

  });