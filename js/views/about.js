define([
'underscore', 'backbone', 'jquery', 'text!tpl/AboutView.html'
],function (_, Backbone, $, AboutViewTpl) {
    'use strict';

    var AboutView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(AboutViewTpl);
            return this;
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }
    });
    return AboutView;
});