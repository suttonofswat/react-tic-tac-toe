var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


module.exports = React.createClass({
	getInitialState: function(){
		//Initial design of players on game board
		return{
			playerOne: <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>,
			playerTwo: <span className="glyphicon glyphicon-record" aria-hidden="true"></span>

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
	//on click, switching the activePlayer from player one to player two
		if(this.state.tiles != undefined){
			console.log('this spot is taken');
			return;
		}
		if(this.props.player == 'Player One'){
			this.setState({ tiles: this.state.playerOne });
			this.props.setTiles(this.props.pos, 'Player One');		}
		else{

			this.setState({ tiles: this.state.playerTwo });
			this.props.setTiles(this.props.pos, 'Player Two');
		}
		this.props.setTiles(this.props.key);
		this.props.switchPlayer();
		this.props.checkWinner();

	}
	
})