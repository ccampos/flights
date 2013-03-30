define(function() {
	var aircraftView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},
		render: function() {
			var variables,
				template;

			variables = {
				jetliner: this.options.jetliner,
				model: this.options.model,
				cargo_capacity: this.options.cargo_capacity,
				fuel_capacity: this.options.fuel_capacity,
				range: this.options.range,
				speed_cruise: this.options.speed_cruise
			};

			template = _.template( $('#aircraft').html(), variables );

			this.$el.html( template );
		},
		events: {
			'click button': 'fly'
		},
		fly: function( ) {
			console.log(this.options.jetliner, 'is departing ...');
		}
	});

	return {
		aircraftView: aircraftView
	}
});