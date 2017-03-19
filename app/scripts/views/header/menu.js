/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var MenuView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/header/menu.hbs'],

		events: {
			'click #menu-open': '_openMenu',
			'click #menu-close': '_dismiss',
			'click a': '_navigation'
		},


    /**
     *	_openMenu - open menu
     *
     *	@private
     *	@function
     */
    _openMenu: function (ev) {
      $(ev.currentTarget).toggleClass('active');

      App.Views.Header.$('#menu-close').toggleClass('active');
      App.Views.Header.$('#menu-wrapper').toggleClass('active');
    },

		_dismiss: function (ev){
    	$(ev.currentTarget).toggleClass('active');
      // App.Views.Header.$('#menu-close').toggleClass('active');
      App.Views.Header.$('#menu-open').toggleClass('active');
			App.Views.Header.$('#menu-wrapper').toggleClass('active');
		},

		_navigation: function (){
      App.Views.Header.$('#menu-open').addClass('active');
      App.Views.Header.$('#menu-close').removeClass('active');
			App.Views.Header.$('#menu-wrapper').removeClass('active');
		}
	});

	return MenuView;
});
