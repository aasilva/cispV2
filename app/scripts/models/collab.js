/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var NewsModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + '?json=get_post&post_type=collab&slug=' + this.get('slug');
		},

		initialize: function() {
		},

		defaults: {
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
			var res = response.post || response;
			var d = res.date.split('-');
			var months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

			res.prettyDate = months[parseInt(d[1], 10) - 1] + '<br>' + d[0];

			// calculate Estimated Reading Time
			res.ert = Math.ceil((res.content.split(' ').length / 250));

			return res;
		}
	});

	return NewsModel;
});
