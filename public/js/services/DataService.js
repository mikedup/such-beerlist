(function () {

	function DataService ($http) {

		// Grab all beers from BreweryDB
		this.getBeerlist = function () {
			return $http({ method: 'GET', url: '/beers' });
		}
		
		// Save beer to My Beers
		this.addToMyBeers = function (beerData) {
			return $http({ method: 'POST', url: '/api/beers', data: beerData });
		}

		// Get list of my beers
		this.getMyBeers = function () {
			return $http({ method: 'GET', url: '/api/beers' });
		}

		// Remove beer from my beers
		this.removeBeer = function (id) {
			return $http({ method: 'DELETE', url: '/api/beers/' + id });
		}

	}

	DataService.$inject = ['$http'];

	 angular
    .module('app')
    .service('DataService', DataService);

})();