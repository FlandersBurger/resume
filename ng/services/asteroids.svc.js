angular.module('app')
.service('AsteroidsSvc', function($http) {

    var svc = this;

    svc.getCategories = function () {
      return $http.get('/api/categories');
    };

});
