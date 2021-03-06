/*global define*/

define([
	'underscore',
	'backbone',
	'models/news'
], function (_, Backbone, NewsModel) {
	'use strict';

	var NewsCollection = Backbone.Collection.extend({
		url: function () {
			var url = this.search ? App.BaseUrl + App.locale + '?json=get_posts&post_type=news&s=' + this.search : App.BaseUrl + (App.locale !== 'pt' ? '' : 'en') + '?json=get_posts&post_type=news';
			if ( this.isHome ) {
				return url + '&post__in=sticky_posts';
			} else return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: NewsModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			this.totalPosts = res.count_total;
			return res.posts;
		}
	});

	return NewsCollection;
});
