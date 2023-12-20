import * as Player from './player.js';
import * as Gameboard from './gameboard.js';
import * as Ship from './ship.js';
import * as GameManagement from './game-management.js';
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

let startingPlayer = null; // used for swapping starting player between games
let secondPlayer = null;

let currentPlayer = null; // used for game setup
let enemyPlayer = null;

let shipsPlacedCount = 0; 
const shipLengths = [2,2,3,3,4]
const totalShipsCount = shipLengths.length;

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
  while(shipsPlacedCount < shipLengths.length) {
    try {
      alert(`This ship will be ${shipLengths[shipsPlacedCount]} in length`);
  
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
      Gameboard.createGameboard(8),
      GameManagement.createBaseHtmlGameboard(8, playerName),
      null
    );
  }
  else {
    player2 = Player.createPlayer(
      playerName,
      Gameboard.createGameboard(8),
      GameManagement.createBaseHtmlGameboard(8, playerName),
      null
    );
  }

  // if both players are assigned, start the game setup
  if (player1 !== null && player2 !== null) {
    startingPlayer = player1; // used for swapping starting player between games
    secondPlayer = player2;

    currentPlayer = player1; // used for game setup
    enemyPlayer = player2;

    setUpGame();
  }
}

function setUpGame() {
  GameManagement.hidePlayerNameForms();
  GameManagement.hideOrientationRadio();
  GameManagement.removeAllBoardsFromScreen();
  removeFullResetButton();

  GameManagement.displayMessage(currentPlayer.playerName, 'Press any key to place your ships');

  const body = document.querySelector('body');
  body.addEventListener('keydown', onClickToPlaceShips);
}

function onClickToPlaceShips(event) {
  const body = document.querySelector('body');
  body.removeEventListener('keydown', onClickToPlaceShips);
  GameManagement.removeMessage();

  GameManagement.displayOrientationRadio();
  GameManagement.displayPlayerBoardPersonalView(currentPlayer);
  displayFullResetButton();
  
  const gameBoardBlocks = document.querySelectorAll('.game-board-block');
  gameBoardBlocks.forEach((block) => {
    block.addEventListener('click', onShipCoordinateChoice);
  })
}

function onShipCoordinateChoice(event) {
  const coordinate = event.currentTarget.id.split('-');
  const rowIndex = coordinate[1];
  const colIndex = coordinate[2];

  const horizontalIsSelected = document.querySelector('#horizontal').checked;
  let orientation = '';
  if (horizontalIsSelected) {
    orientation = 'horizontal';
  }
  else {
    orientation = 'vertical';
  }

  let newShip = Ship.createShip(shipLengths[shipsPlacedCount]);

  currentPlayer.playerBoard.placeShip(
    newShip,
    orientation,
    Number(rowIndex),
    Number(colIndex)
  )

  currentPlayer.playerBoardPersonalView = GameManagement.placeShipInHtml(
    currentPlayer.playerBoardPersonalView,
    newShip,
    orientation,
    Number(rowIndex),
    Number(colIndex)
  )

  shipsPlacedCount++;
  if (shipsPlacedCount === totalShipsCount) {
    console.log(`${currentPlayer.playerName} finished placing ships`);
    
    // save copy of HTML to mask
    currentPlayer.playerBoardMaskedView = currentPlayer.playerBoardPersonalView.cloneNode(true);

    // mask the masked copy
    GameManagement.maskPlayerBoard(currentPlayer.playerBoardMaskedView);

    // display 'finished placing ships' message
    // add 1 more event listener to the game...or just move on to empty screen on last entry

    if (player1.playerBoardMaskedView !== null && player2.playerBoardMaskedView !== null) {
      // then the game is set up and we are ready to play
      startPlayerTurn();
    }
    else {
      // we need to get the second player set up
      // send it back to setup
      shipsPlacedCount = 0;
      switchCurrentPlayer();
      setUpGame();
    }
  }
}

function startPlayerTurn() {
  switchCurrentPlayer();
  console.log(`It's ${currentPlayer.playerName}'s turn`);

  GameManagement.hideOrientationRadio();
  GameManagement.removeAllBoardsFromScreen();
  removeFullResetButton();

  GameManagement.displayMessage(
    currentPlayer.playerName,
    `It's your turn to attack. Press any key to continue`
  );
  const body = document.querySelector('body');
  body.addEventListener('keydown', onPlayerTurn);
}

function onPlayerTurn() {
  const body = document.querySelector('body');
  body.removeEventListener('keydown', onPlayerTurn);

  GameManagement.removeMessage();
  GameManagement.displayPlayerBoardPersonalView(currentPlayer);
  GameManagement.displayPlayerBoardMasked(enemyPlayer);
  displayFullResetButton();
    
  const gameBoardBlocks = document.querySelectorAll('.game-board-block');
  gameBoardBlocks.forEach((block) => {
    block.addEventListener('click', onAttackChoice);
  })
}

function onAttackChoice(event) {
  const gameBoardBlockId = event.currentTarget.id;
  console.log(gameBoardBlockId);

  const coordinate = gameBoardBlockId.split('-');
  const rowIndex = Number(coordinate[1]);
  const colIndex = Number(coordinate[2]);

  const wasSuccessfulAttack = enemyPlayer.playerBoard.receiveAttack(rowIndex, colIndex);

  if (wasSuccessfulAttack) {
    GameManagement.displayHit(enemyPlayer.playerBoardPersonalView, gameBoardBlockId);
    GameManagement.displayHit(enemyPlayer.playerBoardMaskedView, gameBoardBlockId);

    const attackedShip = enemyPlayer.playerBoard.gameboard[rowIndex][colIndex].ship
    const shipIsSunk = attackedShip.isSunk()
    if (shipIsSunk) {
      console.log('A ship has been sunk!');
      const attackedShipCoordinates = enemyPlayer.playerBoard.getShipCoordinatesList(attackedShip);
      attackedShipCoordinates.forEach((coordinate) => {
        GameManagement.unMaskGameBoardBlock(enemyPlayer.playerBoardMaskedView, `c-${coordinate[0]}-${coordinate[1]}`);
      });

      if (enemyPlayer.playerBoard.allShipsAreSunk()) {

      }
    }
    else {
      waitForPlayerToEndTurn();
    }
    /*
    if the ship is sunk {
      get all of the ship's coordinates (game block id's) from player.playerBoard
      remove mask on all of the ship's coordinates
      if all ships are sunk (game is over) {
        run endOfGame
      }
      else {
        wait for player to end their turn
      }
    }
    else {
      wait for player to end their turn
    }
    */
  }
  else {
    // display miss on both boards
    GameManagement.displayMiss(enemyPlayer.playerBoardPersonalView, gameBoardBlockId);
    GameManagement.displayMiss(enemyPlayer.playerBoardMaskedView, gameBoardBlockId);

    // remove mask from masked view
    GameManagement.unMaskGameBoardBlock(
      enemyPlayer.playerBoardMaskedView,
      gameBoardBlockId
    );

    // wait for player to end their turn
  }

}

function waitForPlayerToEndTurn() {
  // display a message to click to continue to next player's turn
  // set up a keypress to continue the game
}

function onPlayerEndsTurn() {
  // remove the keypress listener
  startPlayerTurn();
}

function endOfGame() {
  // declare winner
  // show both player boards (personal views)
}




function displayFullResetButton() {
  const fullResetButton = document.createElement('button');
  fullResetButton.classList.add('full-reset-button');
  fullResetButton.textContent = 'Full Reset';
  fullResetButton.addEventListener('click', onFullReset);

  const body = document.querySelector('body');
  body.appendChild(fullResetButton);
}

function removeFullResetButton() {
  try {
    const fullResetButton = document.querySelector('.full-reset-button');
    fullResetButton.remove();
  } catch (e) {
    return;
  }
}

function onFullReset() {
  GameManagement.displayPlayerNameForms();

  player1 = null;
  player2 = null;

  startingPlayer = null;
  secondPlayer = null;

  currentPlayer = null;
  enemyPlayer = null;

  playAgain = false;

  // remove whatever boards are currently showing
}

function switchCurrentPlayer() {
  const tempPlayer = currentPlayer;
  currentPlayer = enemyPlayer;
  enemyPlayer = tempPlayer;
}

