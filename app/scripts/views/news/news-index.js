/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/news/news-item',
	'collectionview'
], function ($, _, Backbone, JST, NewsItemView) {
	'use strict';

	var NewsIndexView = Backbone.CollectionView.extend({
		template: JST['app/scripts/templates/news/news-index.hbs'],

		tagName: 'section',

		id: 'posts-list',

		className: 'posts-list posts-list--news',

		events: {
			'click #load-more-posts': '_loadMore'
		},

		subview: NewsItemView,

    _loadMore: function () {
			App.Vent.trigger('news:more');
		}
	});

	return NewsIndexView;
});
