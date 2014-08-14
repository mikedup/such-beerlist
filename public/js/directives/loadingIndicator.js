(function () {
  
  function loadingIndicator () { 
    return {
      restrict: 'A',
      template: '<div>Loading...</div>',
      link : function(scope, element, attrs) {
          scope.$on("loading-started", function(e) {
              element.css({"display" : ""});
          });
          scope.$on("loading-complete", function(e) {
              element.css({"display" : "none"});
          });
      }
    }
  }

  angular 
    .module('app')
    .directive('loadingIndicator', loadingIndicator);

})();