define(function () {
	var aircraftModel = Backbone.Model.extend({
		defaults: {
			jetliner: 'Commercial Aircraft',
			model: 'Aircraft Model'
		},
		initialize: function() {
			console.warn('aircraftModel: jetliner ->', this.attributes.jetliner, ', model ->', this.attributes.model);
			console.log(this);
		}
	});

	return {
		aircraftModel: aircraftModel
	}
});
