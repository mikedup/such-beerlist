(function () {
  
  function config ($routeProvider) {
    $routeProvider
      .when('/browse', {
        templateUrl: '/views/browse.html',
        controller: 'BrowseBeers',
        controllerAs: 'beers'
      })
      .when('/mybeers', {
        templateUrl: '/views/mybeers.html',
        controller: 'MyBeers',
        controllerAs: 'beers'
      })
      .when('/wishlist', {
        templateUrl: '/views/wishlist.html',
        controller: 'Wishlist',
        controllerAs: 'beers'
      })
      .otherwise({
        redirectTo: '/browse'
      });
  }

  angular
    .module('app')
    .config(config);

})();