(function() {

	angular.module('Digivice')
	.factory('TamersFactory', ['$http', function($http) {
		var data = [
						{
							name: 'Pancho',
							img: '',
							colorclass: 'font-bg-pancho',
							statsToggle: false,
							stats: {
								nature: {
									expressive: 0,
									empathic: 1,
									logic: 1,
									kinetic: 2,
								},
								skills: {
									expressive: {
										performance: -1,
										speak: -1,
										deceive: -1
									},
									empathic: {
										negotiation: -1,
										senseMotive: -1,
										resilence: -1
									},
									logic: {
										informatic: -1,
										enginering: -1,
										idea: -1
									},
									kinetic: {
										atletism: -1,
										combat: -1,
										stealth: -1
									},
									general: {
										survival: -1
									}
								}
							},
							digimon: {
								name: 'Patamon',
								specie: 'Patamon',
								img: "assets/img/patamon.jpg",
								attr: 'data',
								attrIcon: 'fa-floppy-o'
							}
						},
						{

							name: 'Paula',
							img: '',
							colorclass: 'font-bg-paula',
							digimon: {
								name: 'Labramon',
								specie: 'Labramon',
								img: "assets/img/labramon.png",
								attr: 'vaccine',
								attrIcon: 'fa-shield'
							}
						},
						{

							name: 'Yuyu',
							img: '',
							colorclass: 'font-bg-yuyu',
							digimon: {
								name: 'Hagurumon',
								specie: 'Hagurumon',
								img: "assets/img/hagurumon.png",
								attr: 'virus',
								attrIcon: 'fa-bug'
							}
						}
					];
		return data

	}]);
})();

