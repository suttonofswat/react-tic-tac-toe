var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

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
		console.log(this.state.tiles);
		var gBTiles = this.state.tiles
			.map(function(tile) {
			return(
				<div className="col-xs-4 tile">
				</div>
			);
		});
		return (
			<div className="gameBoard">
				{gBTiles}
			</div>
		);
	}
	
})