define(['backbone'], function(Backbone, BoxModel) {
	return Backbone.Model.extend({
		defaults: {
			'yo': 'lo',
			'sw': 'ag',
			'poop': 'juice'
		}
	});
});