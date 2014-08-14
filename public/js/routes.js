(function () {
  
  function config ($routeProvider, $httpProvider) {
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

     $httpProvider
      .interceptors.push(function($q, $rootScope) {
        return {
          'request': function(config) {
            $rootScope.$broadcast('loading-started');
            return config || $q.when(config);
          },
          'response': function(response) {
            $rootScope.$broadcast('loading-complete');
            return response || $q.when(response);
          }
        };
      });
  }

  angular
    .module('app')
    .config(config);

})();