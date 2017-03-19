/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'baseview'
], function ($, _, Backbone, JST) {
    'use strict';

    var MembersIndexView = Backbone.BaseView.extend({
        template: JST['app/scripts/templates/members/members-index.hbs'],

        tagName: 'section',

        className: 'members-container',

        events: {}
    });

    return MembersIndexView;
});
