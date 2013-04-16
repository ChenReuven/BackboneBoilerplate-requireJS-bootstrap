define([
	'underscore', 'backbone', 'jquery', 'views/header', 'views/footer', 'views/home','views/about'
],function (_, Backbone, $, HeaderView, FooterView, HomeView, AboutView) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
	    routes: {
	        ""                  : "home",
	        "wines/page/:page"	: "list",
	        "wines/add"         : "addWine",
	        "wines/:id"         : "wineDetails",
	        "about"             : "about"
	    },

	    initialize: function () {
	        this.headerView = new HeaderView();
	        this.footerView = new FooterView();
	        $('.header').html(this.headerView.el);
	        $('.footer').html(this.footerView.el);
	    },

		home: function(page) {
			if(!this.homeView){
				this.homeView = new HomeView();
			}
			$('#content').html(this.homeView.el);
	        this.headerView.selectMenuItem('home-menu');

	    },

	    about: function () {
	        if (!this.aboutView) {
	            this.aboutView = new AboutView();
	        }
	        $('#content').html(this.aboutView.el);
	        this.headerView.selectMenuItem('about-menu');
	    }
	});

	return AppRouter;
});