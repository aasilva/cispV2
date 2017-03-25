/*global define*/

define([
  'jquery',
  'backbone',
  'templates',
  'controllers/common',
  'controllers/home',
  'controllers/static',
  'controllers/publication',
  'controllers/news',
  'controllers/events',
  'controllers/members',
  'controllers/project',
  'controllers/grants',
  'controllers/collab'
], function ($, Backbone, JST, CommonController, HomeController, StaticController, PublicationController, NewsController, EventsController, MembersController, ProjectController, GrantsController, CollabController) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      ':category/:slug(/)': '_detail',
      'pt': '_changeLocalePt',
      'en': '_changeLocaleEn',
      ':category(/)': '_category',
      '(/)': '_index'
    },

    spinner: JST['app/scripts/templates/components/spinner.hbs'],

    /**
     *   initialize - setup application's router
     *
     *   @public
     */
    initialize: function () {
      if (!App.Controllers.Home) {
        App.Controllers.Home = new HomeController;
      }
      if (!App.Controllers.Static) {
        App.Controllers.Static = new StaticController;
      }
      if (!App.Controllers.Common) {
        App.Controllers.Common = new CommonController;
      }
      if (!App.Controllers.Publication) {
        App.Controllers.Publication = new PublicationController;
      }
      if (!App.Controllers.News) {
        App.Controllers.News = new NewsController;
      }
      if (!App.Controllers.Events) {
        App.Controllers.Events = new EventsController;
      }
      if (!App.Controllers.Members) {
        App.Controllers.Members = new MembersController;
      }
      if (!App.Controllers.Project) {
        App.Controllers.Project = new ProjectController;
      }
      if (!App.Controllers.Grants) {
        App.Controllers.Grants = new GrantsController;
      }
      if (!App.Controllers.Collab) {
        App.Controllers.Collab = new CollabController;
      }
    },

    /**
     *   _common - cleanup and render of common elements
     *
     *   @private
     *   @function
     */
    _common: function (catg) {
      if (App.Views.Active) {
        App.Views.Active.close();
        App.Views.Active = null;
      }

      if (!App.Views.Footer) {
        App.Vent.trigger('common:footer');
      }

      if (!App.Views.Header) {
        App.Vent.trigger('common:header', catg);
      }

      App.Vent.trigger('common:hero', catg); // always render hero section due to dynamic content conforming page

      //window.scrollTo(0, 0);
    },

    /**
     *   _loading - add an animated spinner to the app's main container
     *
     *   @private
     *   @function
     */
    _loading: function () {
      requestAnimationFrame(function () {
        App.Container.html(this.spinner());
      }.bind(this));
    },

    /**
     *  _index - render homepage listing all posts
     *
     *  @private
     *  @function
     */
    _index: function () {
      this._common('home'); // added argument home for hero section context (catg is undefined when it's home)
      App.Vent.trigger('home:index');
    },

    /**
     *   _category - render post listing by category
     *
     *   @private
     *   @function
     *   @param {string} catg - category name/slug
     */
    _category: function (catg) {
      this._common(catg);
      this._loading();

      if (catg === App.i18n.get('route-news')) {
        App.Vent.trigger('news:index');
      } else if (catg === App.i18n.get('route-events')) {
        App.Vent.trigger('events:index');
      } else if (catg === App.i18n.get('route-publications')) {
        App.Vent.trigger('publications:index');
      } else if (catg === App.i18n.get('route-projects')) {
        App.Vent.trigger('projects:index');
      } else if (catg === App.i18n.get('route-members')) {
        App.Vent.trigger('members:index');
      } else if (catg === App.i18n.get('route-scholarships')) {
        App.Vent.trigger('grants:index');
      } else if (catg === App.i18n.get('route-contacts')) {
        App.Vent.trigger('static:contacts');
      } else if (catg === App.i18n.get('route-mission')) {
        App.Vent.trigger('static:mission');
      } else if (catg === App.i18n.get('route-monitoring_committee')) {
        App.Vent.trigger('static:commission');
      } else if (catg === App.i18n.get('route-thematic_lines')) {
        App.Vent.trigger('static:thematic');
      }
    },

    /**
     *   _detail - render post detail based on category and post slug
     *
     *   @private
     *   @function
     *   @param {string} catg
     *   @param {string} slug
     */
    _detail: function (catg, slug) {
      this._common(catg);
      this._loading();

      if (catg === 'membros') {
        App.Vent.trigger('members:detail', {
          slug: slug
        });
      } else if (catg === 'publicacoes') {
        App.Vent.trigger('publications:index', {
          slug: slug
        });
      } else if (catg === 'eventos') {
        App.Vent.trigger('events:detail', {
          category: catg,
          slug: slug
        });
      } else if (catg === 'noticias') {
        App.Vent.trigger('news:detail', {
          category: catg,
          slug: slug
        });
      } else if (catg === 'contactos') {
        if (slug === 'colaborar-com-cisp') {
          App.Vent.trigger('collab:index');
        }
      }

    }
  });

  return Router;
});
