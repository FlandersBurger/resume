angular.module('app')
.service('PostsSvc', function($http) {

  var svc = this;

  svc.fetch = function () {
    return $http.get('/api/posts');
  };

  svc.create = function (post) {
    return $http.post('/api/posts', post);
  };

  svc.getPost = function (post) {
    return $http.get('/api/posts/' + post._id);
  };

});
