require.config({
	baseUrl: './scripts/',
	paths: {
		jquery: 'vendor/jquery-1.11.0.min',
		backbone: 'vendor/backbone-min',
		underscore: 'vendor/underscore-min'
	},
	shim: {
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});

require([
	'jquery',
	'app/views/box', 'app/views/achievements'
], function($, BoxView, Achievements){

	$(document).ready(function(){
		var boxView1 = new BoxView({'el': '#box1'}),
			boxView2 = new BoxView({'el': '#box2'}),
			boxView3 = new BoxView({'el': '#box3'});

		var achievements = new Achievements({});

		achievements.registerListenTo(boxView1.model, 'change', 'handleBox1Achievement');
		achievements.registerListenTo(boxView2.model, 'change', 'handleBox2Achievement');
		achievements.registerListenTo(boxView3.model, 'change', 'handleBox3Achievement');
	});
});