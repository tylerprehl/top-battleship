import * as Player from './player.js';
import * as Gameboard from './gameboard.js';
import * as Ship from './ship.js';


console.log('Starting Game');

console.log('Get Player 1 Name');
const player1Name = prompt('Player 1 Name');
const player1 = Player.createPlayer(player1Name, Gameboard.createGameboard());
if (player1Name.length === 0) {
  throw new Error('stop game');
}

console.log('Get Player 2 Name');
const player2Name = prompt('Player 2 Name');
const player2 = Player.createPlayer(player2Name, Gameboard.createGameboard());

const shipLengths = [2]

console.log('Starting the actual game...');

let startingPlayer = player1; // used for swapping starting player between games
let secondPlayer = player2;

let currentPlayer = startingPlayer; // used for game setup
let enemyPlayer = secondPlayer;

let playAgain = false;

do {

  // placing ships by player will be a full function/class
  console.log('Get Player 1 Ship Locations');
  alert('Get Player 1 Ship Locations');
  let shipsPlacedCount = 0; 
  while(shipsPlacedCount < shipLengths.length) {
    try {
      alert(`This ship will be ${shipLengths[shipsPlacedCount]} in length`);
  
      const shipInfoStr = prompt(
        'Enter ship info\n' +
        'Ex: h,0,1 will be horizontal, starting at row 0, col 1'
      )
      const shipInfoArr = shipInfoStr.split(',');
  
      // getShipOrientation will be a radio button selection eventually
      let orientation = shipInfoArr[0];
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
      // because only table clicks will queue placeShip, sending a starting coordinate 
      // that is out of bounds is impossilbe
      // (would be cool if there's a faded version of ship until placed)
      player1.playerBoard.placeShip(
        Ship.createShip(shipLengths[shipsPlacedCount]),
        orientation,
        Number(shipInfoArr[1]),
        Number(shipInfoArr[2])
      )
      shipsPlacedCount++;
    } catch (e) {
      alert(`Error: ${e.message}\nPlease try again`);
    }
  }
  
  console.log('Get Player 2 Ship Locations');
  alert('Get Player 2 Ship Locations');
  shipsPlacedCount = 0; 
  while(shipsPlacedCount < shipLengths.length) {
    try {
      alert(`This ship will be ${shipLengths[shipsPlacedCount]} in length`);
  
      const shipInfoStr = prompt(
        'Enter ship info\n' +
        'Ex: h,0,1 will be horizontal, starting at row 0, col 1'
      )
      const shipInfoArr = shipInfoStr.split(',');
  
      // getShipOrientation will be a radio button selection eventually
      let orientation = shipInfoArr[0];
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
      // because only table clicks will queue placeShip, sending a starting coordinate 
      // that is out of bounds is impossilbe
      // (would be cool if there's a faded version of ship until placed)
      player2.playerBoard.placeShip(
        Ship.createShip(shipLengths[shipsPlacedCount]),
        orientation,
        Number(shipInfoArr[1]),
        Number(shipInfoArr[2])
      )
      shipsPlacedCount++;
    } catch (e) {
      alert(`Error: ${e.message}\nPlease try again`);
    }
  }

  alert('And the gameplay begins!');

  while (player1.playerBoard.allShipsAreSunk() === false && 
  player2.playerBoard.allShipsAreSunk() === false) {
  
    alert(`${currentPlayer.playerName}, it's your turn`);
    
    const attackCoordinatesStr = prompt(`Pick a coordinate to attack\nEx: 1,1`);
    const attackCoordinatesArr = attackCoordinatesStr.split(',');
    
    try {
      const successfulAttack = enemyPlayer.playerBoard.receiveAttack(
        Number(attackCoordinatesArr[0]),
        Number(attackCoordinatesArr[1])
      );
      
      if (successfulAttack) {
        alert(`Nice hit!`);
      }
      else {
        alert(`Miss!`);
      }
    
      // switch turns
      const tempPlayer = currentPlayer;
      currentPlayer = enemyPlayer;
      enemyPlayer = tempPlayer;
    
    } catch (e) {
      alert(`Error: ${e.message}\nPlease try again`);
    }
  }

  console.log('Someone won the game!');

  // this can definitely be a function
  if (player1.playerBoard.allShipsAreSunk() === true) {
    alert(`${player2.playerName} won the game!`);
    player2.increaseWinCount();
  }
  else if (player2.playerBoard.allShipsAreSunk() === true) {
    alert(`${player1.playerName} won the game!`);
    player1.increaseWinCount();
  }
  else {
    console.log('Actually, something went wrong cause nobody won');
  }

  // this can definitely be a function
  const playAgainStr = prompt('Play again? (true/false)');
  if (playAgainStr === 'true') {
    playAgain = true;
  }
  else if (playAgainStr === 'false') {
    playAgain = false;
  }
  else {
    alert('You didn\'t enter true OR false, so we\'re gonna end it.');
    playAgain = false;
  }


  // this can definitely be a function
  if (playAgain) {
    console.log('Playing again!...');
    let tempPlayer = startingPlayer;
    startingPlayer = secondPlayer;
    secondPlayer = tempPlayer;

    currentPlayer = startingPlayer;
    enemyPlayer = secondPlayer;

    player1.playerBoard.resetBoard();
    player2.playerBoard.resetBoard();
  }

} while (playAgain)
  
console.log('Finished playing');


