define([
	'data/flights.aircraft',
	'data/flights.locations',
	'util/flights.util.distance',
	'util/flights.util.random',
	'util/flights.util.time'
], function(Aircraft, Locations, UtilDist, UtilRand, UtilTime) {
	var locations = Locations.locations,
		locations_length = locations.length,
		rand1 = UtilRand.getRandom(0, locations_length),
		rand2 = UtilRand.getRandom(0, locations_length),
		locDep = locations[rand1],
		locArr = locations[rand2],
		coord1 = UtilDist.getCoord(locDep),
		coord2 = UtilDist.getCoord(locArr),
		distance = UtilDist.getDistance(coord1, coord2),
		speed = Aircraft.aircraft.jetliners.boeing[0].speed.cruise,
		duration = UtilTime.getDuration(distance, speed),
		hrsMins = UtilTime.getHrsMins(duration),
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
			},
			distance: distance,
			duration: duration,
			durHrsMins: {
				hours: hrsMins.hours,
				minutes: hrsMins.minutes
			}
		};

	return {
		route: route
	};
});