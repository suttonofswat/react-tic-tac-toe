var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var GameBoardComponent = require('./GameBoardComponent');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Home</h1>
				<div>
					<GameBoardComponent />
							
				</div>
			</div>
		);
	}
	
})