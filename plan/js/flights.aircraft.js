// Airbus, Boeing, McDonnell Douglas
var aircraft = {
	units: {
		capacity: liter,
		ceiling: meter,
		altitude: meter,
		range: kilometer,
		run: meter,
		speed: kph,
		time: minute
	},
	jetliners: [
		{
			airbus: [
				{
					model: A318,
					cruise: {
						altitude: 11000,
						speed: 828
					},
					fuel: {
						capacity: 24210
					},
					max: {
						altitude: 11000,
						speed: 871
					},
					range: 5700,
					takeoff: {
						altitude: 0,
						run: 1828
					}
				}
			]
		}
	]
};