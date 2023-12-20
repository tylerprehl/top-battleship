function createBaseHtmlGameboard(numRows, playerName) {
  // creates the base HTML gameboard to be saved as a variable
  // size is based on numRows provided (will ALWAYS be a square board)
  // variable size does NOT currently work due to CSS specifications! - must be 8

  const baseGameboardContainer = document.createElement('div');
  baseGameboardContainer.classList.add('game-board-container');

  const gameboardLabel = document.createElement('div');
  gameboardLabel.classList.add('game-board-label')
  gameboardLabel.textContent = `${playerName}'s Board`;
  baseGameboardContainer.appendChild(gameboardLabel);

  const rowHeaderDiv = document.createElement('div');
  rowHeaderDiv.classList.add('game-board-row-header');

  const colHeaderDiv = document.createElement('div');
  colHeaderDiv.classList.add('game-board-col-header');

  // gameBoardBlockDivs have an interior div for 
  const gameBoardBlockDiv = document.createElement('div');
  gameBoardBlockDiv.classList.add('game-board-block');

  const gameBoardBlockDisplayDiv = document.createElement('div');
  gameBoardBlockDisplayDiv.classList.add('block-display');
  gameBoardBlockDiv.appendChild(gameBoardBlockDisplayDiv);

  const baseGameboardGrid = document.createElement('div');
  baseGameboardGrid.classList.add('game-board-grid');

  // add the starting row header (the upper-left corner block)
  baseGameboardGrid.appendChild(rowHeaderDiv.cloneNode());

  // add the starting col headers
  for (let i = 0; i < numRows; i++) {
    const letter = String.fromCharCode(65 + i);
    const newColHeaderDiv = colHeaderDiv.cloneNode();
    newColHeaderDiv.textContent = letter;
    baseGameboardGrid.appendChild(newColHeaderDiv);
  }
  
  // add all of the following rows
  for (let i = 0; i < numRows; i++) {
    const newRowHeaderDiv = rowHeaderDiv.cloneNode();
    newRowHeaderDiv.textContent = i+1;
    baseGameboardGrid.appendChild(newRowHeaderDiv);

    for (let j = 0; j < numRows; j++) {
      const newGameBoardBlockDiv = gameBoardBlockDiv.cloneNode(true);
      newGameBoardBlockDiv['id'] = 'c-' + i.toString() + '-' + j.toString();
      baseGameboardGrid.appendChild(newGameBoardBlockDiv);
    }
  }
  
  baseGameboardContainer.appendChild(baseGameboardGrid);

  return baseGameboardContainer;
}

function hidePlayerNameForms() {
  const playerNameFormContainer = document.querySelector('.name-entry-container');
  playerNameFormContainer.style.display = 'none';
}

function displayPlayerNameForms() {
  const playerNameFormContainer = document.querySelector('.name-entry-container');
  playerNameFormContainer.style.display = 'flex';
}

function removeAllBoardsFromScreen() {
  const allBoardContainers = document.querySelectorAll('.game-board-container');
  allBoardContainers.forEach((gameBoardContainer) => {
    gameBoardContainer.remove();
  });
}

function displayPlayerBoard(playerBoardHtml) {
  const allBoardsContainer = document.querySelector('.all-game-boards-container');
  allBoardsContainer.appendChild(playerBoardHtml);
}

function hideOrientationRadio() {
  const orientationChoiceContainer = document.querySelector('.orientation-choice-container');
  orientationChoiceContainer.style.display = 'none';

  document.querySelector('#horizontal').checked = true;
}

function displayOrientationRadio() {
  const orientationChoiceContainer = document.querySelector('.orientation-choice-container');
  orientationChoiceContainer.style.display = 'flex';
}

function removeMessage() {
  try {
    const messageContainerDiv = document.querySelector('.message-container');
    messageContainerDiv.remove();
  } catch (e) {
    return;
  }
}

function displayMessage(subjectText, detailsText) {
  const messageContainerDiv = document.createElement('div');
  messageContainerDiv.classList.add('message-container');

  const messageSubjectDiv = document.createElement('div');
  messageSubjectDiv.classList.add('message-head');
  messageSubjectDiv.textContent = subjectText;
  messageContainerDiv.appendChild(messageSubjectDiv);

  const messageBodyDiv = document.createElement('div');
  messageBodyDiv.classList.add('message-body');
  messageBodyDiv.textContent = detailsText;
  messageContainerDiv.appendChild(messageBodyDiv);

  const body = document.querySelector('body');
  body.appendChild(messageContainerDiv);
}

function placeShipInHtml(playerBoardHtml, newShip, orientation, rowIndex, colIndex) {
  const shipLength = newShip.length;
  let curRowIndex = rowIndex;
  let curColIndex = colIndex;

  for (let i = 0; i < shipLength; i++) {
    const gameBoardBlock = playerBoardHtml.querySelector(
      `#c-${curRowIndex.toString()}-${curColIndex.toString()}`
    );

    // does this need to be playerBoardHtml for this to not write to the screen immediately?
    // do the changes occur live because it was placed on screen?
    const shipPieceDiv = document.createElement('div');

    let pieceType = '';
    let pieceDirection = '';
    if (i === 0) {
      pieceType = 'ship-end';
      if (orientation === 'horizontal') {
        pieceDirection = 'point-west';
      }
      else {
        pieceDirection = 'point-north';
      }
      shipPieceDiv.classList.add(pieceDirection);
    } 
    
    else if (i === shipLength-1) {
      pieceType = 'ship-end';
      if (orientation === 'horizontal') {
        pieceDirection = 'point-east';
      }
      else {
        pieceDirection = 'point-south';
      }
      shipPieceDiv.classList.add(pieceDirection);
    }
    
    else {
      pieceType = 'ship-body';
    }

    shipPieceDiv.classList.add(pieceType);

    gameBoardBlock.appendChild(shipPieceDiv);

    if (orientation === 'horizontal') {
      curColIndex++;
    }
    else {
      curRowIndex++;
    }
  }

  return playerBoardHtml;
}

function maskPlayerBoard(playerBoard) {
  const gameBoardBlocks = playerBoard.querySelectorAll('.game-board-block');
  gameBoardBlocks.forEach((gameBoardBlock) => {
    const gameBoardBlockDisplayDiv = gameBoardBlock.querySelector('.block-display');
    gameBoardBlockDisplayDiv.classList.add('masked');
  });
}

function displayHit(playerBoard, gameBoardBlockId) {
  // add  hit to the masked game board block div (class and text content)
  const gameBoardBlockDisplayDiv = playerBoard.querySelector(
    `#${gameBoardBlockId}>div.block-display`
  );
  gameBoardBlockDisplayDiv.classList.add('hit');
  gameBoardBlockDisplayDiv.textContent = String.fromCodePoint(0x1f525);
}

function displayMiss(playerBoard, gameBoardBlockId) {
  // add miss to the masked game board block div (class)
  const gameBoardBlockDisplayDiv = playerBoard.querySelector(
    `#${gameBoardBlockId}>div.block-display`
  );
  gameBoardBlockDisplayDiv.classList.add('miss');
}

function unMaskGameBoardBlock(playerBoard, gameBoardBlockId) {
  const gameBoardBlockDisplayDiv = playerBoard.querySelector(
    `#${gameBoardBlockId}>div.block-display`
  );
  gameBoardBlockDisplayDiv.classList.remove('masked');
}

function hideEndgameContent() {
  const endgameContainer = document.querySelector('.endgame-container');
  endgameContainer.style.display = 'none';
}

function displayEndgameContent(winnerName, player1Name, player1Wins, player2Name, player2Wins) {
  const endgameContainer = document.querySelector('.endgame-container');

  const winnerNameDiv = endgameContainer.querySelector('.winner');
  winnerNameDiv.textContent = `${winnerName} Wins!`;
  
  const player1NameDiv = endgameContainer.querySelector('.player-name#player_1');
  player1NameDiv.textContent = player1Name;

  const player2NameDiv = endgameContainer.querySelector('.player-name#player_2');
  player2NameDiv.textContent = player2Name;

  const player1ScoreDiv = endgameContainer.querySelector('.player-wins#player_1');
  player1ScoreDiv.textContent = player1Wins;

  const player2ScoreDiv = endgameContainer.querySelector('.player-wins#player_2');
  player2ScoreDiv.textContent = player2Wins;

  endgameContainer.style.display = 'flex';
}



export { 
  createBaseHtmlGameboard,
  hidePlayerNameForms,
  displayPlayerNameForms,
  removeAllBoardsFromScreen,
  displayPlayerBoard,
  hideOrientationRadio,
  displayOrientationRadio,
  removeMessage,
  displayMessage,
  placeShipInHtml,
  maskPlayerBoard,
  displayHit,
  displayMiss,
  unMaskGameBoardBlock,
  hideEndgameContent,
  displayEndgameContent,
};
