define(function() {
	var locations = [
		{
			city: 'Buenos Aires',
			coord: {
				lat: {
					deg: 34.6036,
					dir: 'S'
				},
				lon: {
					deg: 58.3817,
					dir: 'W'
				}
			},
			country: 'Argentina',
			utc: -4
		},
		{
			city: 'Caracas',
			coord: {
				lat: {
					deg: 10.5000,
					dir: 'N'
				},
				lon: {
					deg: 66.8992,
					dir: 'W'
				}
			},
			country: 'Venezuela',
			utc: -4.5
		},
		{
			city: 'Bogota',
			coord: {
				lat: {
					deg: 4.5981,
					dir: 'N'
				},
				lon: {
					deg: 74.0758,
					dir: 'W'
				}
			},
			country: 'Colombia',
			utc: -5
		},
		{
			city: 'San Jose',
			coord: {
				lat: {
					deg: 9.9247,
					dir: 'N'
				},
				lon: {
					deg: 84.0781,
					dir: 'W'
				}
			},
			country: 'Costa Rica',
			utc: -6
		},
		{
			city: 'Managua',
			coord: {
				lat: {
					deg: 12.1464,
					dir: 'N'
				},
				lon: {
					deg: 86.2706,
					dir: 'W'
				}
			},
			country: 'Nicaragua',
			utc: -6
		},
		{
			city: 'Sao Paulo',
			coord: {
				lat: {
					deg: 23.5000,
					dir: 'S'
				},
				lon: {
					deg: 46.6167,
					dir: 'W'
				}
			},
			country: 'Brasil',
			utc: -3
		},
		{
			city: 'Lima',
			coord: {
				lat: {
					deg: 12.0433,
					dir: 'S'
				},
				lon: {
					deg: 77.0283,
					dir: 'W'
				}
			},
			country: 'Peru',
			utc: -5
		},
		{
			city: 'Barranquilla',
			coord: {
				lat: {
					deg: 10.9639,
					dir: 'N'
				},
				lon: {
					deg: 74.7964,
					dir: 'W'
				}
			},
			country: 'Colombia',
			utc: -5
		},
		{
			city: 'Arequipa',
			coord: {
				lat: {
					deg: 16.4176,
					dir: 'S'
				},
				lon: {
					deg: 71.5368,
					dir: 'W'
				}
			},
			country: 'Peru',
			utc: -5
		},
		{
			city: 'Montevideo',
			coord: {
				lat: {
					deg: 34.8667,
					dir: 'S'
				},
				lon: {
					deg: 56.1667,
					dir: 'W'
				}
			},
			country: 'Uruguay',
			utc: -3
		},
		{
			city: 'La Paz',
			coord: {
				lat: {
					deg: 16.4942,
					dir: 'S'
				},
				lon: {
					deg: 68.1475,
					dir: 'W'
				}
			},
			country: 'Bolivia',
			utc: -4
		},
		{
			city: 'Rio de Janeiro',
			coord: {
				lat: {
					deg: 22.9083,
					dir: 'S'
				},
				lon: {
					deg: 43.2436,
					dir: 'W'
				}
			},
			country: 'Brasil',
			utc: -3
		},
		{
			city: 'Medellin',
			coord: {
				lat: {
					deg: 6.2457,
					dir: 'N'
				},
				lon: {
					deg: 75.5822,
					dir: 'W'
				}
			},
			country: 'Colombia',
			utc: -5
		},
		{
			city: 'Santiago',
			coord: {
				lat: {
					deg: 33.4500,
					dir: 'S'
				},
				lon: {
					deg: 70.6667,
					dir: 'W'
				}
			},
			country: 'Chile',
			utc: -4
		},
		{
			city: 'Quito',
			coord: {
				lat: {
					deg: 0.2186,
					dir: 'S'
				},
				lon: {
					deg: 78.5097,
					dir: 'W'
				}
			},
			country: 'Ecuador',
			utc: -5
		},
		{
			city: 'Mendoza',
			coord: {
				lat: {
					deg: 32.8905,
					dir: 'S'
				},
				lon: {
					deg: 68.8420,
					dir: 'W'
				}
			},
			country: 'Argentina',
			utc: -3
		},
		{
			city: 'La Plata',
			coord: {
				lat: {
					deg: 34.9292,
					dir: 'S'
				},
				lon: {
					deg: 57.9600,
					dir: 'W'
				}
			},
			country: 'Argentina',
			utc: -3
		},
		{
			city: 'Cartagena',
			coord: {
				lat: {
					deg: 10.4000,
					dir: 'N'
				},
				lon: {
					deg: 75.5000,
					dir: 'W'
				}
			},
			country: 'Colombia',
			utc: -5
		},
		{
			city: 'Barquisimeto',
			coord: {
				lat: {
					deg: 10.0667,
					dir: 'N'
				},
				lon: {
					deg: 69.3167,
					dir: 'W'
				}
			},
			country: 'Venezuela',
			utc: -4.5
		}
	];

	return {
		locations: locations
	};
});