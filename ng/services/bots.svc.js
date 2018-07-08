angular.module('app')
.service('BotsSvc', function($http) {

  var svc = this;

  svc.getLists = function () {
    return $http.get('/api/bots/lists');
  };

});
