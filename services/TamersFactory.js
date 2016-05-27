(function() {

	angular.module('Digivice')
	.factory('TamersFactory', ['$http', function($http) {
		var data = [
						{
							name: 'Pancho',
							img: '',
							colorclass: 'font-bg-pancho',
							digimon: {
								name: 'Patamon',
								specie: 'Patamon',
								img: "assets/img/patamon.jpg"
							}
						},
						{

							name: 'Paula',
							img: '',
							colorclass: 'font-bg-paula',
							digimon: {
								name: 'Labramon',
								specie: 'Labramon',
								img: "assets/img/labramon.png"
							}
						},
						{

							name: 'Yuyu',
							img: '',
							colorclass: 'font-bg-yuyu',
							digimon: {
								name: 'Hagurumon',
								specie: 'Hagurumon',
								img: "assets/img/hagurumon.png"
							}
						}
					];
		return data

	}]);
})();

