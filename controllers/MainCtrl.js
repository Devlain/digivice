(function() {

	angular.module('Digivice')
	.controller('MainCtrl', ['$scope', MainCtrl])

	function MainCtrl ($scope) {
		
		$scope.isTrue = false;

		$scope.changeTruth = function() {
			$scope.isTrue = !$scope.isTrue;
		}

	}
	
})();

