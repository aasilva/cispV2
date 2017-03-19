/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var HomeView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/home/home-index.hbs'],

		tagName: 'div',

		className: 'home',

		events: {}
	});

	return HomeView;
});
