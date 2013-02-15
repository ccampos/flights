define(function() {
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
		jetliners: {
			airbus: [
				{
					cargo_capacity: 21.21,
					cockpit_crew: 2,
					fuel_capacity: 24210,
					model: 'A318',
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
					service_altitude: 11000,
					service_ceiling: 12000,
					takeoff_run: 1828,
					thrust: {
						min: 96,
						max: 106
					}
				},
				{
					cargo_capacity: 27.62,
					cockpit_crew: 2,
					fuel_capacity: 24210,
					model: 'A319',
					seating: {
						capacity: {
							class_1: {
								max: 156,
								typical: 134
							},
							class_2: 124
						}
					},
					speed: {
						cruise: 828,
						max: 871
					},
					range: 6700,
					service_altitude: 11000,
					service_ceiling: 12000,
					takeoff_run: 2164,
					thrust: {
						min: 98,
						max: 120
					}
				}
			],
			boeing: [
				{
					cargo_capacity: 18.4,
					cockpit_crew: 3,
					fuel_capacity: 17900,
					model: '737-100',
					seating: {
						capacity: {
							class_1: {
								max: 124
							},
							class_2: 85
						}
					},
					speed: {
						cruise: 780,
						max: 876
					},
					range: 2850,
					service_altitude: 10000,
					service_ceiling: 10700,
					takeoff_run: 2026,
					thrust: {
						max: 64
					}
				}
			]
		}	
	};

	return {
		aircraft: aircraft
	};
});