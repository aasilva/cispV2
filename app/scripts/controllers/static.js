/*global define*/

define([
  'jquery',
  'backbone',
  'views/static/contacts'
], function ($, Backbone, ContactsIndexView) {
  'use strict';

  var StaticController = Backbone.Router.extend({
    initialize: function () {
      App.Vent.on('static:contacts', this._contacts, this);
    },

    /**
     *	_contacts - fetch and render first list of posts
     *
     *	@private
     *	@function
     *	@param {string} catg (optional)
     */
    _contacts: function (catg) {
      App.Views.Active = new ContactsIndexView;
      this._renderIndex();
    },

    /**
     *	_renderIndex - fetch and render list of posts
     *
     *	@private
     *	@function
     */
    _renderIndex: function () {

      requestAnimationFrame(function () {
        App.Container.html(App.Views.Active.render().el);
        App.Vent.trigger('global:scroll');
      });
    }
  });

  return StaticController;
});
