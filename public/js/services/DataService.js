(function () {

	function DataService ($http) {

		// Grab all beers from BreweryDB
		this.getBeerlist = function () {
			return $http({ method: 'GET', url: '/beers' });
		}

	}

	DataService.$inject = ['$http'];

	 angular
    .module('app')
    .service('DataService', DataService);

})();