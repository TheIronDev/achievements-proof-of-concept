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
		var boxView1 = new BoxView({
			'el': '#box1'
		});
		var boxView2 = new BoxView({
			'el': '#box2'
		});

		var achievements = new Achievements({});
	});
});