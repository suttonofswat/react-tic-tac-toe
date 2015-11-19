var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var TileComponent = require('./TileComponent');
var GameBoardComponent = require('./GameBoardComponent');

module.exports = React.createClass({
	getInitialState: function() {
        return {
            //Initial state of the game board.
            tiles:  [
                '', '', '',
                '', '', '',
                '', '', ''
            ],
            activePlayer: 1
        }
    },
    switchPlayer: function() {
			if(this.state.activePlayer == 1){
				this.setState({ activePlayer: 2 });
			}else{
				this.setState({ activePlayer: 1 });
			}
    },

    setTiles: function(position, value){
			//var myTiles = this.state.tiles[position] = value;
			//this.setState({tiles: })
    },

    checkWinner: function(){
    	 debugger;
    	if(document.getElementById('tiles0').innerText == document.getElementById('tiles1').innerText && document.getElementById('tiles1').innerText == document.getElementById('tiles2').innerText){
				return 
						document.getElementById('tiles0').innerText;
								
				
    	}
    	return null;
    },

	render: function(){
		var gBTiles = this.state.tiles
			.map((tile, position) => {
			return(
				<TileComponent key={postion} pos={position} tiles={tile} player={this.state.activePlayer} 
				switchPlayer={this.switchPlayer} checkWinner={this.checkWinner} />
			);
		});
		return (
			<div className="gameBoard">
				{gBTiles}
			</div>
		);
	}
});