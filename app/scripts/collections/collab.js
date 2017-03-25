/*global define*/

define([
	'underscore',
	'backbone',
	'models/collab'
], function (_, Backbone, CollabModel) {
	'use strict';

	var CollabCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_posts&post_type=colaborar';

			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: CollabModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			this.totalPosts = res.count_total;
			return res.posts;
		}
	});

	return CollabCollection;
});
