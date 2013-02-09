/**
* Returns distance between departure and arrival cities
* @method getDistance
* @param {Object} dep city coordinates
* @param {Object} arr city coordinates
* @return {Number} distance
*/
function getDistance(dep, arr) {
	var dLat = dep.lat,
		dLon = dep.lon,
		aLat = arr.lat,
		aLon = arr.lon,
		distance;

	return distance;
};

/**
* Returns city coordinates
* @method getCoord
* @param {Object} location
* @return {Object} coord
*	latitude - lat
*	longitude - lon
*/
function getCoord(location) {
	var lat,
		lon,
		coord;

	lat = location.coord.lat.deg + ' ' + location.coord.lat.dir;
	lon = location.coord.lon.deg + ' ' + location.coord.lon.dir;

	coord = {
		lat: lat,
		lon: lon
	};

	if ($.isEmptyObject(coord)) {
		console.error('No coordinates found for', location.city);
	} else {
		return coord;
	};
};