(function() {

	angular.module('Digivice')
	.factory('TamersFactory', ['$http', function($http) {
		return
			$http.get('assets/js/tamers.json')
			.success(function(data) {
				return data;
			})
			.error(function(err) {
				return err;
			});
	}]);
})();

