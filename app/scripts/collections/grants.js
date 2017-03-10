/*global define*/

define([
	'underscore',
	'backbone',
	'models/grant'
], function (_, Backbone, PublicationModel) {
	'use strict';

	var GrantCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_posts&post_type=grant';

			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: PublicationModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			this.totalPosts = res.count_total;
			return res.posts;
		}
	});

	return GrantCollection;
});
