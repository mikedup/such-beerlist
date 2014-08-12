(function () {

  function SidebarCtrl ($scope, $location) {
    $scope.$location = $location;
  }

  SidebarCtrl.$inject = ['$scope', '$location'];

  angular
    .module('app')
    .controller('SidebarCtrl', SidebarCtrl);

})();