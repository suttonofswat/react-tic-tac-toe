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
            ]
        };
    },

	render: function(){
		console.log(this.state.turn);
		var gBTiles = this.state.tiles
			.map(function(tiles, position) {
			return(
				<TileComponent key={position} tiles={tiles} />
			);
		});
		return (
			<div className="gameBoard">
				{gBTiles}
			</div>
		);
	}


	
});