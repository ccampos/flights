var locations_length = locations.length,
	route = {
	departure: locations[getRandom(0, locLen)].city,
	arrival: locations[getRandom(0, locLen)].city
};

// see random route
console.log('Departure:', route.departure);
console.log('Arrival:', route.arrival);