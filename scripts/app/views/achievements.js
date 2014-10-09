define(['backbone'], function(Backbone) {
	return Backbone.View.extend({
		el: 'html',
		initialize: function() {
			// TODO: Handle global
		},
		handleEvents: function() {
			alert('a');
		}
	});
});