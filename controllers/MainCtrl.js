(function() {

	angular.module('Digivice')
	.controller('MainCtrl', ['$scope', 'TamersFactory', MainCtrl])

	function MainCtrl ($scope, TamersFactory) {
		
		$scope.isTrue = false;

		$scope.changeTruth = function(ordinal) {
			TamersFactory[ordinal].statsToggle = !TamersFactory[ordinal].statsToggle;
		}

	}
	
})();

