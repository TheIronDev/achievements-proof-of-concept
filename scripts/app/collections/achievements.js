define(['backbone', 'app/models/achievement'], function(Backbone, AchievementModel) {

	return Backbone.Collection.extend({
		initialize: function() {
			// Dummy data
			this.add(new AchievementModel({
				id: 'box1',
				name: 'clickedBox1',
				catchPhrase: 'Congrats for clicked on a box...'
			}));
			this.add(new AchievementModel({
				id: 'box2',
				name: 'clickedBox2',
				catchPhrase: 'Poop Tweet.'
			}));
			this.add(new AchievementModel({
				id: 'box3',
				name: 'prereq example',
				catchPhrase: 'Congrats for clicking box 2 and 3'
			}));
		},
		Model: AchievementModel
	});
});