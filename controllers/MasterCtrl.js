(function() {

	angular.module('Digivice')
	.controller('MasterCtrl', ['$scope', 'TamersFactory', MasterCtrl])

	function MasterCtrl ($scope, TamersFactory) {

		/*TamersFactory.success(function(data) {
			$scope.tamers = data;
		});*/

		$scope.tamers = TamersFactory;

		$scope.changeTruth = function() {
			TamersFactory[0].statsToggler();
		}

	};
	
})();

