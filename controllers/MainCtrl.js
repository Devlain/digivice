(function() {

	angular.module('Digivice')
	.controller('MainCtrl', ['$scope', MainCtrl])

	function MainCtrl ($scope) {
		
		$scope.isTrue = true;

		$scope.changeTruth = function() {
			$scope.isTrue = !$scope.isTrue;
		}

	}
	
})();

