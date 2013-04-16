define([
'underscore', 'backbone', 'jquery', 'text!tpl/HeaderView.html'
],function (_, Backbone, $, HeaderViewTpl) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(HeaderViewTpl);
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