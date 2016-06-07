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
			.when('/eclair', {
				templateUrl: 'views/eclair.html',
				controller: 'EclairCtrl',
				data: {
                      private: false
                    }
			})
			.when('/:tamer', {
				templateUrl: 'views/tamer.html',
				controller: 'TamerCtrl',
				data: {
                      private: false
                    }
			})
			.otherwise({
				redirectTo: '/'
			})

		$locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
		
	})

})();
