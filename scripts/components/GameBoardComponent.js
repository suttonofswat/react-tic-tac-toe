var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var TileComponent = require('./TileComponent');
var GameBoardComponent = require('./GameBoardComponent');

module.exports = React.createClass({
	getInitialState: function() {
        return {
            //Initial state of the game board
            tiles:  [
                '', '', '',
                '', '', '',
                '', '', ''
            ],
            //Initial state of the player
            activePlayer: 1
        }
    },
    switchPlayer: function() {
    		//Creating Function to switch player on the parent element to use once move has been
    		//made on the TileComponent.
			if(this.state.activePlayer == 1){
				this.setState({ activePlayer: 2 });
			}else{
				this.setState({ activePlayer: 1 });
			}
    },

    setTiles: function(position, value){
			var myTiles = this.state.tiles
			myTiles[position] = value;
			this.setState({tiles: myTiles});
    },

    checkWinner: function(){
    	 // Running through the positions of the tiles to declare a winner
    	if(this.state.tiles[0] == this.state.tiles[1] 
    		&& this.state.tiles[1] == this.state.tiles[2]){
    		console.log('player wins')
				return this.state.tiles[0];			
								
				
    	}else if(this.state.tiles[0] == this.state.tiles[1] 
    		&& this.state.tiles[1] == this.state.tiles[2]){
    		console.log('player wins')
				return this.state.tiles[0];	
		}		
								
    	return null;
    },

	render: function(){
		//mapping through the tile board
		var gBTiles = this.state.tiles
			.map((tile, position) => {
			return(
				<TileComponent key={position} pos={position} tiles={tile} player={this.state.activePlayer} 
				switchPlayer={this.switchPlayer} checkWinner={this.checkWinner} 
				setTiles={this.setTiles}/>
			);
		});
		return (
			<div className="gameBoard">
				{gBTiles}
			</div>
		);
	}
});