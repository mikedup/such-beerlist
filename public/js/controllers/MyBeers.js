(function () {

  function MyBeers ($scope, DataService) {

    $scope.myBeers;
    var self = this;

    getMyBeers();
    
    function getMyBeers () {
      DataService.getMyBeers()
        .success(function (beers) {
          self.myBeers = beers;
        })
        .error(function (err) {
          console.log(err);
        });
    }

    $scope.removeBeer = function (id) {
      DataService.removeBeer(id)
        .success(function (beers) {
          alert('Beer successfully deleted!');
          self.myBeers = beers;
        })
        .error(function (err) {
          console.log(err);
          alert('Sorry, something went wrong. No beers for you!');
        });
    }

  }

  MyBeers.$inject = ['$scope', 'DataService'];

  angular
    .module('app')
    .controller('MyBeers', MyBeers);

})();