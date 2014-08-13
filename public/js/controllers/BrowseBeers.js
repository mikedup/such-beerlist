(function () {

  function BrowseBeers ($scope, DataService) {

    $scope.beerlist;
    var self = this;

    getBeerlist();
    
    function getBeerlist () {
      DataService.getBeerlist()
        .success(function (beers) {
          self.beerlist = beers.data;
        })
        .error(function (err) {
          console.log('Sorry, something went wrong. No beers for you!');
        });
    }

    $scope.addToMyBeers = function (beerData) {
      DataService.addToMyBeers(beerData)
        .success(function (beers) {
          alert('Beer successfully added!');
        })
        .error(function (err) {
          console.log(err);
          alert('Sorry, something went wrong. No beers for you!');
        });
    }

  }

  BrowseBeers.$inject = ['$scope', 'DataService'];

  angular
    .module('app')
    .controller('BrowseBeers', BrowseBeers);

})();