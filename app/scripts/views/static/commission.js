/*global define*/

define([
  'jquery',
  'backbone',
  'templates',
  'baseview'
], function ($, Backbone, JST) {
  'use strict';

  var CommissionView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/static/commission.hbs'],

    tagName: 'div',

    id: 'commission',

    className: 'commission'
  });

  return CommissionView;
});
