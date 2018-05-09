angular.module('app')
.controller('PostsCtrl', function ($scope, $filter, PostsSvc) {

  $scope.addPost = function () {
    if ($scope.postBody) {
      PostsSvc.create({
        body: $scope.postBody
      }).then(function (post) {
        $scope.postBody = null;
      });
    }
  };

  PostsSvc.fetch()
  .then(function (response) {
    $scope.posts = response.data;
  });

  $scope.$on('ws:new_post', function (_, post) {
    $scope.$apply(function () {
      PostsSvc.getPost(post)
      .then(function (response) {
        $scope.posts.unshift(response.data);
      });
    });
  });

});
