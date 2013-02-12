// Airbus, Boeing, McDonnell Douglas
var aircraft = {
	units: {
		altitude: 'meter',
		cargo_capacity: 'cubic_meter',
		fuel_capacity: 'liter',
		speed: 'kph',
		range: 'kilometer',
		service_altitude: 'meter',
		service_ceiling: 'meter',
		takeoff_run: 'meter',
		thrust: 'kilonewton'
	},
	jetliners: [
		{
			airbus: [
				{
					model: 'A318',
					cargo_capacity: 21.21,
					cockpit_crew: 2,
					fuel_capacity: 24210,
					seating: {
						capacity: {
							class_1: {
								max: 132,
								typical: 117
							},
							class_2: 107
						}
					},
					speed: {
						cruise: 828,
						max: 871
					},
					range: 5700,
					service_ceiling: 12000,
					service_altitude: 11000,
					takeoff_run: 1828,
					thrust: {
						min: 96,
						max: 106
					}
				}
			]
		}
	]
};