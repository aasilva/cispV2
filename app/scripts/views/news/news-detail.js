/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var NewsDetailView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/news/news-detail.hbs'],

		tagName: 'article',

		id: function () {
			return 'new-detail-' + this.model.get('id');
		},

		className: 'new__detail'
	});

	return NewsDetailView;
});
