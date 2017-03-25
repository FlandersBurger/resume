angular.module('app')
.directive('hoverDiv', function() {

  return {
    restrict: 'C',
    link: function(scope, elem, attr) {
      elem.bind('mouseover', function(e) {
        scope.hoverdiv(e, attr.id + '-info');
      });
      elem.bind('mouseout', function(e) {
        scope.hoverdiv(e, attr.id + '-info');
      });
    }
  };

});
