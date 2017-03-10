/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/grants/grants-item',
	'collectionview'
], function ($, _, Backbone, JST, GrantsItemView) {
	'use strict';

	var GrantsIndexView = Backbone.CollectionView.extend({
		template: JST['app/scripts/templates/grants/grants-index.hbs'],

		tagName: 'section',

		id: 'posts-list',

		className: 'posts-list posts-list--grants',

		events: {
			'click #load-more-posts': '_lazyLoad'
		},

		subview: GrantsItemView,

		_lazyLoad: function () {
			App.Vent.trigger('grants:more');
		}
	});

	return GrantsIndexView;
});
