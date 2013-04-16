define([
'underscore', 'backbone', 'jquery', 'text!tpl/FooterView.html'
],function (_, Backbone, $, FooterViewTpl) {
    'use strict';

    var FooterView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(FooterViewTpl);
            return this;
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }
    });
    return FooterView;
});