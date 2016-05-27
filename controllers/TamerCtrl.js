(function() {

	angular.module('Digivice')
	.controller('TamerCtrl', ['$scope', '$routeParams', TamerCtrl])

	function TamerCtrl ($scope, $routeParams) {

		$scope.debug = 'debug';

		$scope.tamer = $routeParams.tamer;
		
	}
	
})();

