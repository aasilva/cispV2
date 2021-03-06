/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'baseview'
], function ($, _, Backbone, JST) {
  'use strict';

  var ContactsView = Backbone.BaseView.extend({
    template: JST['app/scripts/templates/static/contacts.hbs'],

    tagName: 'div',

    id: 'contacts',

    className: 'contacts',

    events: {
      'click #form-send': '_onSendEmailClick'
    },

    initMap: function() {
      var cisp = {lat: 38.768059, lng: -9.164965};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: cisp
      });
      var marker = new google.maps.Marker({
        position: cisp,
        map: map
      });
    },

    _onSendEmailClick: function (ev) {
      ev.preventDefault();

      var message = $('#form-message').val();
      var name = $('#form-name').val();
      var email = $('#form-email').val();

      if (!name.length) {

        App.Vent.trigger('common:alert', 'Inserir nome' /*App.i18n.get('alert').nameRequired*/);

      } else if (!email.length) {

        App.Vent.trigger('common:alert', App.i18n.get('alert').emailRequired);

      } else if (!this._validateEmail(email)) {

        App.Vent.trigger('common:alert', App.i18n.get('alert').insertValidEmail);

      } else if (message.length < 2) {

        App.Vent.trigger('common:alert', App.i18n.get('alert').writeMessage);

      }
      else {

        this._sendEmail(name, email, message);

      }
    },

    _validateEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    _sendEmail: function(name, email, message) {
      //TODO: Change email at url
      $.ajax({
        url: "https://formspree.io/aasilva01gmail.com",
        type: 'POST',
        data: {
          name: name,
          replyto: email,
          message: message
        },
        dataType: "json",
        success: function (res) {/*jshint unused: false*/
          App.Vent.trigger('common:alert', App.i18n.get('alert').messageSent, function(){
            $('form').find("input, textarea").val("");
          });
        },
        error: function (model, xhr) {/*jshint unused: false*/
          console.log('model', model);
          console.log('xhr', xhr)
        }
      });


      console.log('done');
    }

  });

  return ContactsView;
});
