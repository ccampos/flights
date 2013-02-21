define(function() {
	var aircraftView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},
		render: function() {
			var variables,
				template;

			variables = { jetliner: this.options.jetliner };

			template = _.template( $('#aircraft_template').html(), variables );

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