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
*/




// ***************************************
// ************* GAME SETUP **************
// ***************************************

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
// ************* START GAME **************
// ***************************************
listenForPlayerName();






// ***********************************************
// *********** LISTENER FUNCTIONS GAME ***********
// ***********************************************
/*
Because listeners don't return data to where they were called,
but we want them to be able to access over-arching game data 
(like the Players), they 'need' to be a part of battleship.js

'need' is quoted because I'm sure it's possible, just not with
what I currently know
*/

function listenForPlayerName() {
  const playerNameForms = document.querySelectorAll('.name-entry-form');
  playerNameForms.forEach((playerNameForm) => {
    playerNameForm.addEventListener('submit', createPlayer);
  });
}

function createPlayer(event) {
  // UPDATE FOR FUTURE
  // make it clear that the name was submitted
  // name character limit
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
  GameManagement.displayPlayerBoard(currentPlayer.playerBoardPersonalView);
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
    // save copy of HTML to MaskedView and mask it
    currentPlayer.playerBoardMaskedView = currentPlayer.playerBoardPersonalView.cloneNode(true);
    GameManagement.maskPlayerBoard(currentPlayer.playerBoardMaskedView);

    // display 'finished placing ships' message
    // add 1 more event listener to the game...or just move on to empty screen on last entry

    if (player1.playerBoardMaskedView !== null && player2.playerBoardMaskedView !== null) {
      startPlayerTurn();
    }
    else {
      shipsPlacedCount = 0;
      switchCurrentPlayer();
      setUpGame();
    }
  }
}

function startPlayerTurn() {
  switchCurrentPlayer();

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
  GameManagement.displayPlayerBoard(currentPlayer.playerBoardPersonalView);
  GameManagement.displayPlayerBoard(enemyPlayer.playerBoardMaskedView);
  displayFullResetButton();
    
  const gameBoardBlocks = document.querySelectorAll('.game-board-block');
  gameBoardBlocks.forEach((block) => {
    block.addEventListener('click', onAttackChoice);
  })
}

function onAttackChoice(event) {
  const gameBoardBlockId = event.currentTarget.id;

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
      const attackedShipCoordinates = enemyPlayer.playerBoard.getShipCoordinatesList(attackedShip);
      attackedShipCoordinates.forEach((coordinate) => {
        GameManagement.unMaskGameBoardBlock(enemyPlayer.playerBoardMaskedView, `c-${coordinate[0]}-${coordinate[1]}`);
      });

      if (enemyPlayer.playerBoard.allShipsAreSunk()) {
        endOfGame();
      }
      else {
        waitForPlayerToEndTurn(wasSuccessfulAttack);
      }
    }
    else {
      waitForPlayerToEndTurn(wasSuccessfulAttack);
    }
  }
  else {
    GameManagement.displayMiss(enemyPlayer.playerBoardPersonalView, gameBoardBlockId);
    GameManagement.displayMiss(enemyPlayer.playerBoardMaskedView, gameBoardBlockId);

    // remove mask of empty space from MaskedView
    GameManagement.unMaskGameBoardBlock(
      enemyPlayer.playerBoardMaskedView,
      gameBoardBlockId
    );

    waitForPlayerToEndTurn(wasSuccessfulAttack);
  }
}

function waitForPlayerToEndTurn(wasSuccessfulAttack) {
  if (wasSuccessfulAttack) {
    GameManagement.displayMessage('', 'Nice hit! Now press any key to let the other player go');
  }
  else {
    GameManagement.displayMessage('', 'Tough miss :/ Now press any key to let the other player go');
  }
  
  const body = document.querySelector('body');
  body.addEventListener('keydown', onPlayerEndsTurn);
}

function onPlayerEndsTurn() {
  GameManagement.removeMessage();
  
  const body = document.querySelector('body');
  body.removeEventListener('keydown', onPlayerEndsTurn);

  startPlayerTurn();
}

function endOfGame() {
  currentPlayer.increaseWinCount();

  GameManagement.displayEndgameContent(
    currentPlayer.playerName,
    player1.playerName,
    player1.getWinCount(),
    player2.playerName,
    player2.getWinCount()
  );
  
  displayPlayAgainButton();
}

function displayPlayAgainButton() {
  const playAgainButton = document.createElement('button');
  playAgainButton.classList.add('play-again-button');
  playAgainButton.textContent = 'Play Again?';
  playAgainButton.addEventListener('click', onPlayAgain);

  const endgameContainer = document.querySelector('.endgame-container');
  endgameContainer.insertAdjacentElement('afterend',playAgainButton);
}

function onPlayAgain() {
  GameManagement.hideEndgameContent();
  removePlayAgainButton();

  GameManagement.hideOrientationRadio();
  GameManagement.removeAllBoardsFromScreen();
  GameManagement.removeMessage();
  GameManagement.hideEndgameContent();
  removeFullResetButton();

  GameManagement.displayPlayerNameForms();

  // switch starting player
  const tempPlayer = startingPlayer;
  startingPlayer = secondPlayer;
  secondPlayer = tempPlayer;

  currentPlayer = startingPlayer;
  enemyPlayer = secondPlayer;

  shipsPlacedCount = 0;

  resetPlayerBoards(player1);
  resetPlayerBoards(player2);

  setUpGame();
}





// ***********************************************
// ************** HELPER FUNCTIONS ***************
// ***********************************************
/*
I decided that these functions, while *ideally* placed elsewhere,
are required to be in battleship.js because they either need to 
be able to manage over-arching game data (such as onFullReset
and it's companion functions)
*/

function resetPlayerBoards(player) {
  player.playerBoard = Gameboard.createGameboard(8);
  player.playerBoardPersonalView = GameManagement.createBaseHtmlGameboard(8, player.playerName);
  player.playerBoardMaskedView = null;
}

function removePlayAgainButton() {
  try {
    const playAgainButton = document.querySelector('.play-again-button');
    playAgainButton.remove();
  } catch (e) {
    return;
  }
}

function displayFullResetButton() {
  const fullResetButton = document.createElement('button');
  fullResetButton.classList.add('full-reset-button');
  fullResetButton.textContent = 'Full Reset';
  fullResetButton.addEventListener('click', onFullReset);

  const body = document.querySelector('body');
  body.appendChild(fullResetButton);
}

function onFullReset() {
  GameManagement.hideOrientationRadio();
  GameManagement.removeAllBoardsFromScreen();
  GameManagement.removeMessage();
  GameManagement.hideEndgameContent();
  removeFullResetButton();
  removePlayAgainButton();

  GameManagement.displayPlayerNameForms();

  // reset all game data
  player1 = null;
  player2 = null;

  startingPlayer = null;
  secondPlayer = null;

  currentPlayer = null;
  enemyPlayer = null;

  playAgain = false;
  shipsPlacedCount = 0;

  listenForPlayerName();
}

function removeFullResetButton() {
  try {
    const fullResetButton = document.querySelector('.full-reset-button');
    fullResetButton.remove();
  } catch (e) {
    return;
  }
}

function switchCurrentPlayer() {
  const tempPlayer = currentPlayer;
  currentPlayer = enemyPlayer;
  enemyPlayer = tempPlayer;
}

