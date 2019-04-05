angular.module('app')
.service('BotsSvc', function($http) {

  var svc = this;

  svc.getLists = function (user) {
    return $http.get('/api/bots/lists');
  };

  svc.getList = function (list) {
    return $http.get('/api/bots/lists/' + list._id);
  };

  svc.saveList = function (user, list) {
    return $http.put('/api/bots/lists', {
      user: user,
      list: list
    });
  };

  svc.reportList = function (user, list) {
    $http.get('/api/bots/lists/' + list._id + '/report/' + user._id);
  };

  svc.deleteList = function (list) {
    return $http.delete('/api/bots/lists/' + list._id);
  };

});
