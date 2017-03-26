/*global define*/

define([
  'jquery',
  'backbone',
  'views/static/contacts',
  'views/static/mission',
  'views/static/commission',
  'views/static/thematic'
], function ($, Backbone, ContactsIndexView, AboutMissionIndexView, AboutCommissionIndexView, AboutThematicIndexView) {
  'use strict';

  var StaticController = Backbone.Router.extend({
    initialize: function () {
      App.Vent.on('static:contacts', this._contacts, this);
      App.Vent.on('static:mission', this._mission, this);
      App.Vent.on('static:commission', this._commission, this);
      App.Vent.on('static:thematic', this._thematic, this);
    },

    /**
     *	_contacts - fetch and render first list of posts
     *
     *	@private
     *	@function
     *	@param {string} catg (optional)
     */
    _contacts: function () {
      App.Views.Active = new ContactsIndexView;
      this._renderIndex(App.Views.Active.initMap);
    },

    /**
     *	_mission - fetch and render first list of posts
     *
     *	@private
     *	@function
     *	@param {string} catg (optional)
     */
    _mission: function () {
      App.Views.Active = new AboutMissionIndexView;
      this._renderIndex();
    },

    /**
     *	_commission - fetch and render first list of posts
     *
     *	@private
     *	@function
     *	@param {string} catg (optional)
     */
    _commission: function () {
      App.Views.Active = new AboutCommissionIndexView;
      this._renderIndex();
    },


    /**
     *	_thematic - fetch and render first list of posts
     *
     *	@private
     *	@function
     *	@param {string} catg (optional)
     */
    _thematic: function () {
      App.Views.Active = new AboutThematicIndexView;
      this._renderIndex();
    },

    /**
     *	_renderIndex - fetch and render list of posts
     *
     *	@private
     *	@function
     */
    _renderIndex: function (callback) {
      requestAnimationFrame(function () {
        App.Container.html(App.Views.Active.render().el);
        App.Vent.trigger('global:scroll');

        if ( callback ) {
          callback();
        }
      });
    }
  });

  return StaticController;
});
