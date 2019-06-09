angular.module('app')
.service('FileSvc', function($http) {

    var svc = this;

    svc.getImages = function (folder) {
      return $http.get('/api/files/images/' + folder);
    };

});
