angular.module("app").directive("clickOutside", function ($document) {
  return {
    restrict: "A",
    scope: {
      clickOutside: "&",
    },
    link: function (scope, el, attr) {
      $document.on("click", function (e) {
        if (el !== e.target && !el[0].contains(e.target)) {
          scope.$apply(function () {
            //scope.$parent.setSelectedList();
            scope.$eval(scope.clickOutside);
          });
        }
      });
    },
  };
});
