define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		urlRoot: 'achievements/',
		defaults: {
			id: '',
			name: '',
			catchPhrase: 'These aren\'t your dad\'s puns, tu-tu-tu-turbo puns!',
			imageUrl: '',
			achieved: false,
			achieveDate: ''
		},
		markAchieved: function() {
			var currentDate = new Date();
			this.set({
				achieved:true,
				achieveDate: currentDate.toTimeString()
			});
			this.save();
		}
	});
});