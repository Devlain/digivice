(function() {

	angular.module('Digivice')
	.factory('TamersFactory', ['$http', function($http) {
		var obj = '';
		return obj
			/*$http.get('assets/js/tamers.json')
			.success(function(data) {
				return data;
			})
			.error(function(err) {
				return err;
			});*/
	}]);
})();

