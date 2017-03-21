/*global define, App*/
define([
	'underscore',
	'backbone',
	'text!locales/i18n/resource.json'
], function (_, Backbone, source) {
	'use strict';
	/**
	*   i18nModel Module.
	*   @module i18nModel
	*   @see module:i18nModel
	*   @listens user:change
	*
	*   @author Miguel Melo
	*   @version 1.0.0
	*   @summary: wrapper used to handle internationalization and localization within the webapp
	*/
	var I18nModel = Backbone.Model.extend({
		/**
		*   initialize - wrapper used to handle internationalization and localization within the webapp
		*
		*   @public
		*	@function
		*   @this i18n 
		*/
		initialize: function() {
			var locale = window.localStorage.getItem('locale') || 'en';
			
			App.Vent.on('i18n:locale', this._setLocale, this);
			App.Vent.trigger('i18n:locale', locale);
		},

		/**
		*   parse - format/trasnform API's response
		*
		*   @public
		*	@function
		*   @param {object} response we need to parse
		*   @param {object} [options] we may need to control parse's outup
		*   @return {Model} model after being parsed
		*/
		parse: function(response, options)  {// jshint unused:false
			return response;
		},

		/**
		*   changelocale - change target app locale and fetch the appropriate json map
		*
		*   @private
		*	@function
		*   @this i18n
		*/
		_setLocale: function (locale) {
			this.set('locale', locale);
			window.localStorage.setItem('locale', locale);
			App.Document.documentElement.attributes.lang.value = locale;
			this.set(JSON.parse(source)[locale]);
		}
	});

	return I18nModel;
});
