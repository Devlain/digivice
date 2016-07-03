(function() {

	angular.module('Digivice')
	.factory('TamersFactory', ['$http', function($http) {
		var data = [
						{
							name: 'Bright',
							img: '',
							colorclass: 'font-bg-pancho',
							statsToggle: false,
							stats: {
								nature: {
									expressive: 'bad',
									empathic: '',
									logic: '',
									kinetic: 'good',
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
								name: '',
								specie: 'Botamon',
								img: "assets/img/Botamon.jpg",
								attr: 'data',
								attrIcon: 'fa-floppy-o'
							}
						},
						{

							name: 'Alana',
							img: '',
							colorclass: 'font-bg-paula',
							statsToggle: false,
							stats: {
								nature: {
									expressive: 'bad',
									empathic: '',
									logic: 'good',
									kinetic: '',
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
								name: '',
								specie: 'Kuramon',
								img: "assets/img/Kuramon.jpg",
								attr: 'virus',
								attrIcon: 'fa-bug'
							}
						},
						{

							name: 'Alexei',
							img: '',
							colorclass: 'font-bg-yuyu',
							statsToggle: false,
							stats: {
								nature: {
									expressive: '',
									empathic: 'bad',
									logic: '',
									kinetic: 'good',
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
								name: '',
								specie: 'Pitchmon',
								img: "assets/img/Pitchmon.jpg",
								attr: 'data',
								attrIcon: 'fa-floppy-o'
							}
						}
					];
		return data

	}]);
})();

