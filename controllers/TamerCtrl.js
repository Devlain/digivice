(function() {

	angular.module('Digivice')
	.controller('TamerCtrl', ['$scope', '$routeParams', '$location', 'TamersFactory', TamerCtrl])

	function TamerCtrl ($scope, $routeParams, $location, TamersFactory) {

		$scope.debug = 'debug';

		$scope.tamer = TamersFactory[$routeParams.tamer];
		
	}
	
})();

