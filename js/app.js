define([
	'data/flights.aircraft',
	'data/flights.flights',
	'data/flights.locations',
	'data/flights.routes',
	'router' // Request router.js
], function(Aircraft, Flights, Locations, Routes, Router) {
	var initialize = function(){
		// Pass in our Route module and call it's initialize function
		Router.initialize();
	};

	var loadFlightModules = function() {
		console.log('Aircraft', Aircraft.aircraft);
		console.log('Flights', Flights.flights);
		console.log('Locations', Locations.locations);
		console.log('Routes', Routes.route);
	};

	return {
		initialize: initialize,
		loadFlightModules: loadFlightModules
	};
});