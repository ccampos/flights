define([
	'data/flights.aircraft',
	'data/flights.flights',
	'data/flights.locations',
	'data/flights.routes',
	'router', // Request router.js
	'views/aircraft',
	'models/aircraft'
], function(Aircraft, Flights, Locations, Routes, Router, AircraftViews, AircraftModels) {
	var initialize = function(){
		// Pass in our Route module and call it's initialize function
		Router.initialize();
	};

	var loadFlightModules = function() {
		console.log('Aircraft', Aircraft.aircraft);
		console.log('Flights', Flights.flights);
		console.log('Locations', Locations.locations);
		console.log('Routes', Routes.route);

		var commercialAircraftView = new AircraftViews.aircraftView({
			el: $('#aircraftView'),
			jetliner: 'Malaguena Airlines'
		});

		var commercialAircraftModel = new AircraftModels.aircraftModel({
			jetliner: 'Boeing',
			model: 'A318'
		});


	};

	return {
		initialize: initialize,
		loadFlightModules: loadFlightModules
	};
});