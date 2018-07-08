angular.module('app')
.service('BotsSvc', function($http) {

  var svc = this;

  svc.fetch = function () {
    return $http.get('/api/lists');
  };

});
