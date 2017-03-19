/*global define*/

define([
  'jquery',
  'backbone',
  'templates',
  'baseview'
], function ($, Backbone, JST) {
  'use strict';

  var ThematicView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/static/thematic.hbs'],

    tagName: 'div',

    id: 'thematic',

    className: 'thematic',

    events: {

    }
  });

  return ThematicView;
});
