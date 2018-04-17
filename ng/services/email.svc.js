angular.module('app')
.service('EmailSvc', function($http) {

  var svc = this;

  svc.send = function (email) {
    console.log(email);
    return $http.post('/api/email', email);
  };

});
