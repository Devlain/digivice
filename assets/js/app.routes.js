(function() {

	angular.module('Digivice')
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/#', {
				controller: 'MainCtrl',
				templateUrl: 'views/main.html',
				data: {
                      private: false
                    }
			})
			.when('/#/:tamerid', {
				controller: 'TamerCtrl',
				templateUrl: 'views/tamer.html',
				data: {
                      private: false
                    }
			})
	});

})();
