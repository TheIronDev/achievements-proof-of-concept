define(['underscore', 'backbone', 'app/collections/achievements'],
	function(_, Backbone, AchievementsCollection) {
		return Backbone.View.extend({
			el: 'html',
			initialize: function() {
				this.collection = new AchievementsCollection();
				this.listenTo(this.collection, 'change:achieved', this.renderAchievement);
			},

			/**
			 * Bind an achievement event to a Model or Collection's event.
			 *    Example:	sendMoney:sync		->	this.eventHandlers.MoneySent
			 *    			contactList:add		->	this.eventHandlers.addedContact
			 *
			 * @param bbObject - bb model collection or view
			 * @param event - event we want to listen for
			 * @param handle - the event handle we want to map the bbObject event to
			 */
			registerListenTo: function(bbObject, event, handle) {
				this.listenTo(bbObject, event, this.eventHandlers[handle]);
			},

			/**
			 * Render the achievements in a consistent manner
			 * @param achievement - the achievement that was
			 */
			renderAchievement: function(achievement, event, options) {
				if (achievement.get('achieved')) {
					var catchPhrase = achievement.get('catchPhrase'),
						$achievement = $('<div class="achievement-content"></div>');

					$achievement.text(catchPhrase);
					this.$el.append($achievement);

					setTimeout(function(){$achievement.addClass('active');},0);
					setTimeout(function() {$achievement.removeClass('active');}, 1500);
				}
			},
			/**
			 * A map of events.
			 * Generally we can keep this simple (mark achieved), but we can had add more complex logic:
			 * 	after a sendMoney, check how much they sent (to see if its above a threshold.)
			 *
			 * For now lets keep this client side, otherwise we can hide this server side.
			 */
			eventHandlers: {
				handleBox1Achievement: function() {
					this.collection.get('box1').markAchieved();
				},
				handleBox2Achievement: function() {
					this.collection.get('box2').markAchieved();
				},
				handleBox3Achievement: function() {
					if (this.collection.get('box2').get('achieved')) {
						this.collection.get('box3').markAchieved();
					}
				}
			}
		});
	});