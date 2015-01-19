'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('piechart', function() {
    return {
        restrict: 'E',
        scope: {
            dset: '='
        },
        template: '<div></div>',
        link: function(scope, element, attrs) {
          console.log(scope, element, attrs);
            //var r = Raphael(element[0]);
            //r.piechart(100, 100, 100, [scope.dset.male, scope.dset.female]);            
        }
    }
});

