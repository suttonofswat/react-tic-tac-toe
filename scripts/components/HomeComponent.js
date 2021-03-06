var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var GameBoardComponent = require('./GameBoardComponent');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<div className="header">
					<div className="container">
						<div className="row">
							<h1>Quic-Tac-Toe</h1>
							<h4>Built by: Leslie Sutton</h4>
							<h5>248-974-4752</h5>
							<h5><a target="_blank" href="https://www.linkedin.com/in/lesliecsutton">linkedin</a></h5>
							<h5><a target="_blank" href="https://github.com/suttonofswat/react-tic-tac-toe">github Project</a></h5>
							
						</div>
					</div>
				</div>
				<div>
					<GameBoardComponent />
							
				</div>
			</div>
		);
	}
	
})