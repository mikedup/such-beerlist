(function () {

  function MyBeers ($scope, DataService) {


  }

  MyBeers.$inject = ['$scope', 'DataService'];

  angular
    .module('app')
    .controller('MyBeers', MyBeers);

})();