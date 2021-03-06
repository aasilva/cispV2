/*global define*/

define([
	'jquery',
	'backbone',
	'collections/grants',
	'views/grants/grants-index'
], function ($, Backbone, GrantsCollection, GrantsListView) {
	'use strict';

	var GrantController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('grants:index', this._index, this);
			App.Vent.on('grants:more', this._loadMore, this);
		},

		/**
		*	_index - fetch and render first list of projects
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg) {
			App.Collections.Project = new GrantsCollection;
			App.Collections.Project.catg = catg;
			App.Views.Active = new GrantsListView({
				collection: App.Collections.Project,
				target: '#post-list-container'
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of projects and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.Project.page++;
			this._renderIndex(function () {
				requestAnimationFrame(function () {
					if ( (App.Collections.Project.page*10) > App.Collections.Project.length ) {
						$('.load-more').remove();
					}
				});
			});
		},

		/**
		*	_renderIndex - fetch and render list of projects
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (callback) {
			App.Collections.Project.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
						App.Vent.trigger('global:scroll');

						if ( callback ) {
							callback();
						}
					});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);

						if ( callback ) {
							callback();
						}
					});
				}
			});
		}

	});

	return GrantController;
});
