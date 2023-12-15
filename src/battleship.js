import * as Player from './player.js';
import * as Gameboard from './gameboard.js';
import * as Ship from './ship.js';

console.log('Starting Game');

console.log('Get Player 1 Name');
const player1Name = prompt('Player 1 Name');
const player1 = Player.createPlayer(player1Name, Gameboard.createGameboard());

console.log('Get Player 2 Name');
const player2Name = prompt('Player 2 Name');
const player2 = Player.createPlayer(player2Name, Gameboard.createGameboard());

const shipLengths = [2,2,3,3,4]

console.log('Get Player 1 Ship Locations');
let shipsPlacedCount = 0; 
while(shipsPlacedCount < 5) {
  try {
    alert(`The first ship will be ${shipLengths[shipsPlacedCount]} in length`);

    // getShipOrientation will be a radio button selection eventually
    let orientation = prompt('Enter orientation: "v" for "vertical", ' + 
      'or "h" for "horizontal"');
    if (orientation === 'v') {
      orientation = 'vertical';
    }
    else if (orientation === 'h') {
      orientation = 'horizontal';
    }
    else {
      throw new Error('invalid orientation');
    }

    // getShipStartCoordinates will be some type of table-click selection
    // (would be cool if there's a faded version of ship until placed)
    const coordinates = prompt('Enter coordinates in the format' + 
    '"rowIndex,colIndex".\nEx: 1,2 would place the start of the ship ' +
    'in the 2nd row at the 3rd column');
    const individualCoordinates = coordinates.split(',');
    player1.playerBoard.placeShip(
      Ship.createShip(shipLengths[shipsPlacedCount]),
      orientation,
      individualCoordinates[0],
      individualCoordinates[1]
    )
    shipsPlacedCount++;
  } catch (e) {
    console.alert(`Error: ${e.message}\nPlease try again`);
  }
}

console.log('Get Player 2 Ship Locations');
