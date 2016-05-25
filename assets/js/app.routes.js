(function() {

	angular.module('Digivice')
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				controller: 'MainCtrl',
				templateUrl: '../views/main.html'
			})
			.when('/:tamerid', {
				controller: 'TamerCtrl',
				templateUrl: '../views/tamer.html'
			})
	});

})();