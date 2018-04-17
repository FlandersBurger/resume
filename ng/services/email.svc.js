angular.module('app')
.service('EmailSvc', function($http) {

  var svc = this;

  svc.send = function (options) {
    return $http.post('/api/email', options);
  };

});
