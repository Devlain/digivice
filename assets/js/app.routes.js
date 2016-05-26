(function() {

	angular.module('Digivice')
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				data: {
                      private: false
                    }
			})
			.when('/tamerid', {
				templateUrl: 'views/tamer.html',
				controller: 'TamerCtrl',
				data: {
                      private: false
                    }
			})
			.otherwise({
				redirecTo: '/'
			})

		$locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
	})

})();
