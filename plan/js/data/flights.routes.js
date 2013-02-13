var locations_length = locations.length,
	route = {
	departure: locations[getRandom(0, locations_length)].city,
	arrival: locations[getRandom(0, locations_length)].city
};

// see random route
console.log('Departure:', route.departure);
console.log('Arrival:', route.arrival);