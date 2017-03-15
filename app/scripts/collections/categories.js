/*global define*/

define([
	'underscore',
	'backbone',
	'models/category'
], function (_, Backbone, PostModel) {
	'use strict';

	var CategoriesCollection = Backbone.Collection.extend({
		url: function () {
			var url = App.BaseUrl + '?json=get_category_index';
			if ( this.parent11 ) {
        url += '?parent=' + this.parent;
      }
			return url + (this.count ? '&count=' + this.count : '') + (this.page ? '&page=' + this.page : '');
		},
		model: PostModel,

		initialize: function () {
			this.page = 1;
		},

		parse: function (res) {
			return res.posts;
		}
	});

	return CategoriesCollection;
});
