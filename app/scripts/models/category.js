/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var CategoryModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + '?json=get_post&slug=' + this.get('slug');
		},

		initialize: function() {
		},

		defaults: {
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			console.log(response);

			return res;
		}
	});

	return CategoryModel;
});
