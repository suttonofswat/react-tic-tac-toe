Quic-Tac-Toe

Styling:
I used Bootstrap for the grid system and icons for the 'x' and 'o'. I wanted to keep the styling clean as the simplicity game was the main focus of the website.

Framework: 
I used React for the framework with three components: Home, GameBoard and Tile.
-Home Component: the parent to the GameBoard component where I could do the header styling. 
-GameBoard component: this is the parent to the Tile Component but child of Home. This is where I set the game board intital state, the active player and the winner. In this component I did most of the functions and mapped over the Tile Component and passed through functions. 
-TileComponent: this is the child of the Game Board Component where I styled the invidiual child and created the function to add the players move inside of the tiles. 

"Features":
I had difficulty with setting the state once the spot had been taken on the board. I also tried to keep my code as DRY as possible, where I ran into problems creating a button to "play again" and that would refresh the board.

GitHub Project:
https://github.com/suttonofswat/react-tic-tac-toe

Thanks for taking the time to check out my quic-tac-toe. I look forward to meeting you soon! 