import * as Player from './player.js';
import * as Gameboard from './gameboard.js';
import * as Ship from './ship.js';
import * as GameSetup from './game-setup.js';
import './styles.css';

/*
Notes (to Self) for Gameplay Design/Order
- assign player1/player2 names
- 'pass the computer' screen
- build player1 board
- 'pass' screen
- build player2/AI board
- game starts ('pass' screen)
- player1 attacks
  > can see own board unmasked and player 2's board masked
- 'pass' screen
- player2/AI attacks
- 'pass' screen
- etc...
- player/AI win/play again/reset screen



What are the next IMMEDIATE game setup activities?
- display "Player 1 turn" empty screen
  > remove all current elements except title
    * boards
    * reset buttons
  > clicking anywhere continues to Player 1 board creation

- on Player 1 board creation screen
  > player's empty board
  > submit button
  > full reset button
  > (eventually) reset board button

- on Player 1 board submission
  > display "Player 2 turn" empty screen
    * remove all current elements except title
    * clicking anywhere continues to Player 2 board creation


Gameplay Management:
- Receive attack (already in gameboard)

DOM Gameplay Management:
- Attack hit
- Attack miss

*/



console.log('Starting Game');
let player1 = null;
let player2 = null;

let startingPlayer = player1; // used for swapping starting player between games
let secondPlayer = player2;

let currentPlayer = startingPlayer; // used for game setup
let enemyPlayer = secondPlayer;

const shipLengths = [2,2,3,3,4]
let playAgain = false;

// ***************************************
// ************* GAME SETUP **************
// ***************************************
listenForPlayerName();





throw new Error('stop game');

console.log('Starting the actual game...');
// ***************************************
// ************** GAME LOOP **************
// ***************************************

do {
// ***************************************
// ********** STILL GAME SETUP ***********
// ***************************************
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


// ***************************************
// ******** GAMEPLAY LOOP BEGINS *********
// ***************************************
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








// ***********************************************
// ************* LISTENER FUNCTIONS **************
// ***********************************************
// Because listeners don't return data to where they were called,
// but we want them to be able to access over-arching game data 
// (like the Players), they 'need' to be a part of battleship.js
//
// 'need' is quoted because I'm sure it's possible, just not with
// what I currently know

function listenForPlayerName() {
  const playerNameForms = document.querySelectorAll('.name-entry-form');
  playerNameForms.forEach((playerNameForm) => {
    playerNameForm.addEventListener('submit', createPlayer);
  });
}

function createPlayer(event) {
  event.preventDefault();
  const playerNum = event.srcElement[0].name.split('_')[1];
  const playerName = event.srcElement[0].value;
  console.log(`Player ${playerNum}: ${playerName}`);

  if (playerNum === '1') {
    player1 = Player.createPlayer(
      playerName,
      Gameboard.createGameboard(),
      GameSetup.createBaseHtmlGameboard(8),
      null
    );
  }
  else {
    player2 = Player.createPlayer(
      playerName,
      Gameboard.createGameboard(),
      GameSetup.createBaseHtmlGameboard(8),
      null
    );
  }

  // if both players are assigned, start the gameSetup
  if (player1 !== null && player2 !== null) {
    console.log('Ready to start the game!');
    GameSetup.hidePlayerNameForms();
    displayFullResetButton();
    // next steps for game start!
  }
}



function displayFullResetButton() {
  const fullResetButton = document.querySelector('.full-reset-button');
  fullResetButton.style.display = 'flex';
  fullResetButton.addEventListener('onclick', onFullReset);
}

function hideFullResetButton() {
  const fullResetButton = document.querySelector('.full-reset-button');
  fullResetButton.style.display = 'none';
}

function onFullReset() {
  GameSetup.displayPlayerNameForms();

  player1 = null;
  player2 = null;

  startingPlayer = null;
  secondPlayer = null;

  currentPlayer = null;
  enemyPlayer = null;

  playAgain = false;

  // remove whatever boards are currently showing
}