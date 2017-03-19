/*global define*/

define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var NewsModel = Backbone.Model.extend({
		url: function () {
			return App.BaseUrl + '?json=get_post&post_type=publication&slug=' + this.get('slug');
		},

		initialize: function() {
		},

		defaults: {
		},

		validate: function(attrs, options) {
		},

		parse: function(response, options)  {
      var res = response.post || response;
      var d = res.date.split(' ')[0].split('-');
      var months = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];

      res.month = months[parseInt(d[1], 10) - 1];
      res.day =  + d[2];
      res.day = res.day < 10 ? '0' + res.day : res.day;

      return res;
		}
	});

	return NewsModel;
});
