define([
'underscore', 'backbone', 'jquery', 'text!tpl/HomeView.html'
],function (_, Backbone, $, HomeViewTpl) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(HomeViewTpl);
            return this;
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }
    });
    return HeaderView;
});