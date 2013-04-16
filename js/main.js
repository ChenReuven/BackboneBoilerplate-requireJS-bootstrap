// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Edit By: Chen Reuven <chen.rvn@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
//    jquery: 'http://code.jquery.com/jquery-1.9.1.min',
    jquery: 'lib/jquery-1.7.2.min',
    bootstrap : 'lib/bootstrap.min',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    tpl : '../tpl',
    text: 'lib/require/text'
  },
  shim: 
  {
    'backbone': {
        deps: ['jquery','underscore'],
        exports: 'Backbone'
    },
  	'underscore' : {
        exports     :   '_'
     },
    'bootstrap': {  
      deps: ['jquery']
     }
  }
});

require(['router/AppRouter','jquery', 'bootstrap'], function(AppRouter){
    var appRouter = new AppRouter();
    Backbone.history.start();
});
