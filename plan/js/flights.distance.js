/**
* Returns distance between departure and arrival cities
* @method getDistance
* @param {Object} dep city coordinates
* @param {Object} arr city coordinates
* @return {Number} distance
*/
function getDistance(dep, arr) {
	var	earthRadius = 6371, // in kilometers
		sqChord,
		angDist,
		lat1 = dep.lat,
		lon1 = dep.lon,
		lat2 = arr.lat,
		lon2 = arr.lon,
		distLat,
		distLat1,
		distLat2,
		distLon,
		distance;

	// ******* 'haversine' formula *******
	// to calculate the great-circle distance between two points
	distLat = toRad(lat2 - lat1);
	distLon = toRad(lon2 - lon1);
	distLat1 = toRad(lat1);
	distLat2 = toRad(lat2);

	// square of half the chord length between the points
	sqChord = Math.sin(distLat / 2) * Math.sin(distLat / 2) +
	        Math.sin(distLon / 2) * Math.sin(distLon / 2) * Math.cos(distLat1) * Math.cos(distLat2);
	// angular distance in radians
	angDist = 2 * Math.atan2(Math.sqrt(sqChord), Math.sqrt(1 - sqChord));

	distance = Math.round(earthRadius * angDist);

	return distance;

	/**
	* Converts numeric degrees to radians
	* @return radians
	*/
	function toRad(number) {
		return number * Math.PI / 180;
	}
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
	var city,
		country,
		lat,
		lon,
		coord;

	city = location.city;
	country = location.country;
	if (location.coord.lat.dir === 'S') {
		lat = -location.coord.lat.deg;
	} else {
		lat = location.coord.lat.deg;
	};

	if (location.coord.lon.dir === 'W') {
		lon = -location.coord.lon.deg;
	} else {
		lon = location.coord.lon.deg;
	};

	coord = {
		city: city,
		country: country,
		lat: lat,
		lon: lon
	};

	if ($.isEmptyObject(coord)) {
		console.error('No coordinates found for', city);
	} else {
		console.warn('remove');
		console.log(city);
		return coord;
	};
};