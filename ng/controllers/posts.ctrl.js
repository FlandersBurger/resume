angular.module('app')
.controller('PostsCtrl', function ($scope, $filter, PostsSvc) {

  $scope.addPost = function () {
    if ($scope.postBody) {
      PostsSvc.create({
        body: $scope.postBody
      }).success(function (post) {
        $scope.postBody = null;
      });
    }
  };

  PostsSvc.fetch()
  .success(function (posts) {
    $scope.posts = posts;
    $scope.filteredPosts = posts;
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
