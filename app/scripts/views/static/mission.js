/*global define*/

define([
  'jquery',
  'backbone',
  'templates',
  'baseview'
], function ($, Backbone, JST) {
  'use strict';

  var MissionView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/about/mission.hbs'],

    tagName: 'div',

    id: 'mission',

    className: 'mission',

    events: {

    }
  });

  return MissionView;
});
