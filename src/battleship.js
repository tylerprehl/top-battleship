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



console.log('Starting Game');

let player1 = null;
let player2 = null;

let startingPlayer = null; // used for swapping starting player between games
let secondPlayer = null;

let currentPlayer = null; // used for game setup
let enemyPlayer = null;

let shipsPlacedCount = 0; 
const shipLengths = [2]
const totalShipsCount = shipLengths.length;

let playAgain = false;

// ***************************************
// ************* GAME SETUP **************
// ***************************************
listenForPlayerName();





throw new Error('stop do-while loop game');

console.log('Starting the actual game...');


do {
// ***************************************
// ********** OG GAMEPLAY LOOP ***********
// ***************************************
// only partially complete, as I've been removing segments as I
// implement them through the UI

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
    console.log(`${currentPlayer.playerName} finished placing ships`);
    
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
  console.log(`The game has ended! ${currentPlayer.playerName} is the winner!`);
  GameManagement.displayEndgameContent(
    player1.playerName,
    player1.getWinCount(),
    player2.playerName,
    player2.getWinCount()
  );
  // display play again button beneath win counts (still above boards)
  // event listener that queues onPlayAgain on 'click'
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

function onPlayAgain() {
  GameManagement.hideEndgameContent();
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

  listenForPlayerName(); // test to ensure new game goes as expected
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

