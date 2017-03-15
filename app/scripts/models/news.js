/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var PostModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + App.locale + '?json=get_post&post_type=news&slug=' + this.get('slug');
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

			if ( !response.thumbnail ) {
				if ( response.post && response.post.thumbnail ) {
					response.thumbnail = response.post.thumbnail;
				} else if ( response.attachments && response.attachments[0].url ) {
					response.thumbnail = response.attachments[0].url;
				}
			}

			return res;
		}
	});

	return PostModel;
});
