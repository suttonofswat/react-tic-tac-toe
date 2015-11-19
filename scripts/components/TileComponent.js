var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


module.exports = React.createClass({
	getInitialState: function(){
		//Initial design of players on game board
		return{
			playerOne: <span id="x" className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>,
			playerTwo: <span id="o" className="glyphicon glyphicon-record" aria-hidden="true"></span>
		}
	},

	render: function(){
		//Setting the position, click event and design for the tiles
		return (
				<div className="col-xs-4 tile" id={'tiles'+ this.props.pos} onClick={this.onMove}>
					{this.state.tiles}
				</div>

		);
	},

onMove: function onMove(event) {
		// console.log(this.state.tiles);
		var tileContent = this.state.tiles;
		console.log(tileContent)
		if(this.state.tiles != undefined){
			console.log('this spot is taken')
			return;
		}
		if(this.props.player == 1){
			this.setState({ tiles: this.state.playerOne });
			this.props.setTiles(this.props.pos, 'player one');
		}
		else{
			this.setState({ tiles: this.state.playerTwo });
			this.props.setTiles(this.props.pos, 'player two');
		}
		this.props.setTiles(this.props.key);
		this.props.switchPlayer();
		this.props.checkWinner();
		console.log(this.props.checkWinner())
	}
	
})