var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


module.exports = React.createClass({
	getInitialState: function(){
		return{
			playerOne: 'x',
			playerTwo: 'o'
		}
	},

	render: function(){
		// debugger;
		return (
				<div className="col-xs-4 tile" id={'tiles'+ this.props.pos} onClick={this.onMove}>
					{this.state.tiles}
				</div>

		);
	},

onMove: function onMove(event) {
		console.log(this.props.pos);
		if(this.state.tiles === 'x' || this.state.tiles === 'o'){
			console.log('this spot is taken')
			return;
		}
		if(this.props.player == 1){
			this.setState({ tiles: this.state.playerOne });
		}
		else{
			this.setState({ tiles: this.state.playerTwo });
		}
		//this.props.setTiles(this.props.key);
		this.props.switchPlayer();
		this.props.checkWinner();
		console.log(this.props.checkWinner())
	}
	
})