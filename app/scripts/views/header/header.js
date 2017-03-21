/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var HeaderContainerView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/header/header.hbs'],

		events: {
			'click #logo': '_returnHome',
			'click #pt': '_changeLocalePT',
			'click #en': '_changeLocaleEN'
		},

		/**
		*	_returnHome - navigate to home
		*
		*	@private
		*	@function
		*/
		_returnHome: function () {
			App.Router.navigate('#', { trigger: true });
		},

		_changeLocalePT: function () {
			window.console.debug('pt');
			App.Vent.trigger('i18n:locale', 'pt');
			window.location.reload();
		},

		_changeLocaleEN: function () {
			window.console.debug('en');
			App.Vent.trigger('i18n:locale', 'en');
			window.location.reload();
		},
	});

	return HeaderContainerView;
});
