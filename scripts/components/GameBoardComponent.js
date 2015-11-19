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
            activePlayer: 'player one', 
            winnerElement: null
        }
    },
    switchPlayer: function() {
    		//Creating Function to switch player on the parent element to use once move has been
    		//made on the TileComponent.
			if(this.state.activePlayer == 'player one'){
				this.setState({ activePlayer: 'player two' });
			}else{
				this.setState({ activePlayer: 'player one' });
			}
    },

    setTiles: function(position, value){
    		//Setting the state on the tiles position
			var myTiles = this.state.tiles
			myTiles[position] = value;
			this.setState({tiles: myTiles});
    },

    checkWinner: function(){
    	 // Running through the positions of the tiles to declare a winner
    	if(this.state.tiles[0] == this.state.tiles[1] 
    		&& this.state.tiles[1] == this.state.tiles[2]){
    			this.setState({winnerElement: this.state.tiles[0]})
				return this.state.tiles[0];
				console.log(this.state.tiles[0]);


								
				
    	}else if(this.state.tiles[3] == this.state.tiles[4] 
    		&& this.state.tiles[4] == this.state.tiles[5]){
				this.setState({winnerElement: this.state.tiles[3]})
				return this.state.tiles[3];	
				console.log(this.state.tiles[3]);		
								
				
    	}else if(this.state.tiles[6] == this.state.tiles[7] 
    		&& this.state.tiles[7] == this.state.tiles[8]){
				this.setState({winnerElement: this.state.tiles[6]})
				return this.state.tiles[6];	
				console.log(this.state.tiles[6]);		
								
				
    	}else if(this.state.tiles[2] == this.state.tiles[4] 
    		&& this.state.tiles[4] == this.state.tiles[6]){
    			this.setState({winnerElement: this.state.tiles[2]})
				return this.state.tiles[2];	
				console.log(this.state.tiles[2]);		
								
				
    	}else if(this.state.tiles[0] == this.state.tiles[4] 
    		&& this.state.tiles[4] == this.state.tiles[8]){
    			this.setState({winnerElement: this.state.tiles[0]})
				return this.state.tiles[0];	
				console.log(this.state.tiles[0]);		
								
				
    	}else if(this.state.tiles[0] == this.state.tiles[3] 
    		&& this.state.tiles[3] == this.state.tiles[6]){
    			this.setState({winnerElement: this.state.tiles[0]})
				return this.state.tiles[0];	
				console.log(this.state.tiles[0]);		
								
				
    	}else if(this.state.tiles[1] == this.state.tiles[4] 
    		&& this.state.tiles[4] == this.state.tiles[7]){
    			this.setState({winnerElement: this.state.tiles[1]})
				return this.state.tiles[1];	
				console.log(this.state.tiles[1]);		
								
				
    	}else if(this.state.tiles[2] == this.state.tiles[5] 
    		&& this.state.tiles[5] == this.state.tiles[8]){
    			this.setState({winnerElement: this.state.tiles[2]})
				return this.state.tiles[2];	
				console.log(this.state.tiles[2]);		
								
				
    	}
    	return null;
    },

	render: function(){
		//mapping through the tile board, passing elements through to the Tile Component
		var gBTiles = this.state.tiles
			.map((tile, position) => {
			return(
				<TileComponent key={position} pos={position} tiles={tile} player={this.state.activePlayer} 
				switchPlayer={this.switchPlayer} checkWinner={this.checkWinner} 
				setTiles={this.setTiles}/>
			);
		});
		if(!this.state.winnerElement){
			var currentTurn = 
				<h5>Current Turn: {this.state.activePlayer}</h5>
		}else{
			currentTurn =
				<h2>Winner: {this.state.winnerElement}</h2>
		}
		return (
			<div className="gameBoard">
				<div>
					<div>{currentTurn}</div>
				</div>
				{gBTiles}
				
			</div>
		);
	}
});