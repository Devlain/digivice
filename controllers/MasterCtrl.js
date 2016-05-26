(function() {

	angular.module('Digivice')
	.controller('MasterCtrl', ['$scope', 'TamersFactory', MasterCtrl])

	function MasterCtrl ($scope, TamersFactory) {

		/*TamersFactory.success(function(data) {
			$scope.tamers = data;
		});*/

		$scope.tamers = [
							{
								name: 'Pancho',
								img: '',
								colorclass: 'warning',
								digimon: {
									name: 'Agumon',
									specie: 'Agumon',
									img: "http://g03.a.alicdn.com/kf/HTB1.7FXKFXXXXbdXFXXq6xXFXXXw/Digimon-Adventure-YAGAMI-TAICHI-font-b-Agumon-b-font-100-Handmade-Plush-Toy-Cosplay-Props.jpg"
								}
							},
							{

								name: 'Paula',
								img: '',
								colorclass: 'danger',
								digimon: {
									name: 'Agumon',
									specie: 'Agumon',
									img: "http://g03.a.alicdn.com/kf/HTB1.7FXKFXXXXbdXFXXq6xXFXXXw/Digimon-Adventure-YAGAMI-TAICHI-font-b-Agumon-b-font-100-Handmade-Plush-Toy-Cosplay-Props.jpg"
								}
							},
							{

								name: 'Yuyu',
								img: '',
								colorclass: 'success',
								digimon: {
									name: 'Agumon',
									specie: 'Agumon',
									img: "http://g03.a.alicdn.com/kf/HTB1.7FXKFXXXXbdXFXXq6xXFXXXw/Digimon-Adventure-YAGAMI-TAICHI-font-b-Agumon-b-font-100-Handmade-Plush-Toy-Cosplay-Props.jpg"
								}
							}
						];

	};
	
})();

