/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/collab/collab-item',
	'collectionview'
], function ($, _, Backbone, JST, CollabItemView) {
	'use strict';

	var CollabIndexView = Backbone.CollectionView.extend({
		template: JST['app/scripts/templates/collab/collab-index.hbs'],

		tagName: 'section',

		id: 'posts-list',

		className: 'posts-list posts-list--collab',

		events: {
			'click #load-more-posts': '_loadMore'
		},

		subview: CollabItemView,

    _loadMore: function () {
			App.Vent.trigger('news:more');
		}
	});

	return CollabIndexView;
});
