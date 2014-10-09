define(['backbone', 'app/models/box'], function(Backbone, BoxModel) {

	// Dumb Model for testing
	return Backbone.View.extend({
		initialize: function() {
			this.model = new BoxModel();
		},
		events: {
			'click .click': 'boxClicked'
		},
		boxClicked: function() {
			var time = new Date();
			this.model.set({
				time: time.toTimeString()
			});
		}
	});
});