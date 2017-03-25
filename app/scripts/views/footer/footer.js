/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var FooterView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/footer/footer.hbs'],

		tagName: 'footer',

		className: 'footer__container',

		events: {
      'click #pt': '_changeLocalePT',
      'click #en': '_changeLocaleEN'
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
    }
	});

	return FooterView;
});
