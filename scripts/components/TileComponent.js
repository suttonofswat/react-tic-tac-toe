var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


module.exports = React.createClass({
	getInitialState: function(){
		return{
			turn: false
		}
	},
	handleClick: function(event) {
    	this.setState({turn: !this.state.turn})

  	},

	render: function(){
		console.log(this.props.tiles)
		console.log(this.state.turn);
		return (
				<div className="col-xs-4 tile" onClick={this.handleClick} >
					{this.props.tiles}
				</div>

		);
	}

	
})