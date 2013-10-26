define(function () {
	var aircraftView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},
		render: function () {
			var variables = {},
				template;

			for (var property in this.options) {
				variables[property] = this.options[property];
			};

			template = _.template($('#aircraft').html(), variables);

			this.$el.html(template);
		},
		events: {
			'click button': 'fly'
		},
		fly: function () {
			console.log(this.options.jetliner, 'is departing ...');
		}
	});

	return {
		aircraftView: aircraftView
	}
});
