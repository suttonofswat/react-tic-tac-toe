var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


module.exports = React.createClass({
	getInitialState: function(){
		return{
			turn: 'o',
		}
	},

	render: function(){
		return (
				<div className="col-xs-4 tile" onClick={this.onMove}>
					{this.state.tiles}
				
				</div>

		);
	},
	onMove: function(event){
		console.log('this was clicked');
		console.log(this.state.turn)
		this.setState({tiles: this.state.turn})

		

	}

	
})