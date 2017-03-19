/*global define*/

define([
	'jquery',
	'../../../bower_components/underscore/underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var HeroSctionView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/common/heroSection.hbs'],
	});

	return HeroSctionView;
});
