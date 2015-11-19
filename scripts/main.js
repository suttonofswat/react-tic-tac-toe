'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
require('bootstrap');

var app = document.getElementById('app');
var HomeComponent = require('./components/HomeComponent');



var Router = Backbone.Router.extend({
	routes: {
		'' : 'home'
	},
	home: function() {
		ReactDOM.render(<HomeComponent />, app);
	}
	
})

var r = new Router();
Backbone.history.start();


