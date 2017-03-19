/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/events/events-item',
	'collectionview'
], function ($, _, Backbone, JST, EventsItemView) {
	'use strict';

	var EventsIndexView = Backbone.CollectionView.extend({
		template: JST['app/scripts/templates/events/events-index.hbs'],

		tagName: 'section',

		id: 'posts-list',

		className: 'posts-list posts-list--events',

		events: {
			'click #load-more-posts': '_loadMore'
		},

		subview: EventsItemView,

		_loadMore: function () {
			App.Vent.trigger('events:more');
		}
	});

	return EventsIndexView;
});
