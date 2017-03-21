/*global define*/

define([
	'jquery', 'backbone',
	'collections/page', 'models/page',
	'views/common/alert-view',
	'views/footer/footer',
	'views/header/header',
	'../views/common/heroSection',
	'views/header/menu'
], function ($, Backbone, PageCollection, PageModel, AlertView, FooterView, HeaderView, HeroSectionView, MenuView) {
	'use strict';

	var CommonElementsController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('common:footer', this._footer, this);
			App.Vent.on('common:header', this._header, this);
			App.Vent.on('common:hero', this._heroSection, this);
      		App.Vent.on('common:alert', this._alert, this);
		},

		/**
		*	_detail - fetch page detail
		*
		*	@private
		*	@function
		*	@param {object} options
		*	@param {string} slug
		*/
		_detail: function (options) {
			var _this = this;
			console.log('detail');

			if ( App.Collections.Page && App.Collections.Page.findWhere({ slug: options.slug }) ) {
				App.Models.Detail = App.Collections.Page.findWhere({ slug: options.slug });
				this._detailView(App.Models.Detail);
			} else {
				App.Models.Detail = new PageModel;
				App.Models.Detail.set('slug', options.slug);
				App.Models.Detail.fetch({
					success: function () {
						_this._detailView(App.Models.Detail);
					}
				});
			}
		},

		/**
		*	_detailView - render page detail view
		*
		*	@private
		*	@function
		*	@param {object} page - page model to be rendered
		*/
		_detailView: function (page) {
			var _this = this;
			App.Views.Active = new PageDetailView({
				model: page
			});
			requestAnimationFrame(function () {
				App.Container.html(App.Views.Active.render().el);
			});
		},

		/**
		*	_footer
		*
		*	@private
		*	@function
		*/
		_footer: function () {
			App.Views.Footer = new FooterView();
			requestAnimationFrame(function () {
				App.Footer.html(App.Views.Footer.render().el);
			});
		},

		/**
		*	_header
		*
		*	@private
		*	@function
		*	@param {string} catg - page context
		*/
		_header: function (catg) {
			requestAnimationFrame(function () {
				App.Views.Header = new HeaderView({
					el: '#header',
					catg: catg,
					locale: App.i18n.get('locale')
				}).render();
			});
			this._menu();
		},

		/**
		*	_menu
		*
		*	@private
		*	@function
		*/
		_menu: function () {
			requestAnimationFrame(function () {
				App.Views.Menu = new MenuView({
					el: '#menu'
				}).render();
			});
		},

		_alert: function (message, closeCallback) {
		var msg = message || 'Default message';

		App.Views.Alert = new AlertView({
			model: new Backbone.Model({
			message: msg
			})
		});

		App.Body.append(App.Views.Alert.render().el);

		if(closeCallback){
			App.Views.Alert.on("closed", closeCallback);
		}

		},

		/**
		*	_heroSection
		*
		*	@private
		*	@function
		*	@param {string} catg - page context
		*/
		_heroSection: function (catg) {
			$('#hero-section').removeAttr('class');
			$('#hero-section').addClass('hero-section ' + catg);

			requestAnimationFrame(function () {
				App.Views.HeroSection = new HeroSectionView({
					el: '#hero-section',
					catg: catg
					}).render();
			});
		}
	});

	return CommonElementsController;
});
