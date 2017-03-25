/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/publications/publications-item',
  'collectionview'
], function ($, _, Backbone, JST, PublicationItemView) {
  'use strict';

  var PublicationsIndexView = Backbone.CollectionView.extend({
    template: JST['app/scripts/templates/publications/publications-index.hbs'],

    tagName: 'section',

    id: 'publication-list',

    className: 'posts-list posts-list--publications',

    events: {
      'click #load-more-posts': '_lazyLoad'
    },

    subview: PublicationItemView,

    _lazyLoad: function () {
      App.Vent.trigger('publications:more');
    }
  });

  return PublicationsIndexView;
});
