define(['backbone', 'app/models/box'], function(Backbone, BoxModel) {
	return Backbone.View.extend({
		initialize: function() {
			this.model = new BoxModel();
		},
		events: {
			'click .click': 'boxClicked'
		},
		boxClicked: function(event) {
			var time = new Date();
			this.model.set({
				time: time.toDateString()
			});
			console.log(this);
		}
	});
});