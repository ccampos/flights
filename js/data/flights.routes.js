define([
	'data/flights.locations',
	'util/flights.util.random'
], function(Locations, Util) {
	var locations = Locations.locations,
		locations_length = locations.length,
		rand1 = Util.getRandom(0, locations_length),
		rand2 = Util.getRandom(0, locations_length),
		locDep = locations[rand1],
		locArr = locations[rand2],
		route = {
			departure: {
				city: locDep.city,
				coord: locDep.coord,
				country: locDep.country
			},
			arrival: {
				city: locArr.city,
				coord: locArr.coord,
				country: locArr.country
			}
		};

	return {
		route: route
	};
});