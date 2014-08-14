(function () {

  function BrowseBeers ($scope, DataService) {

    var self = this;
    
    //Get beerlist
    DataService.getBeerlist()
      .success(function (beers) {
        self.beerlist = beers.data;
      })
      .error(function (err) {
        console.log(err);
      });

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