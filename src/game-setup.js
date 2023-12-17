/*
Game Setup:
- Get Player name
  > require SOME name (form validation)
- Get Ship starting coordinate
- Get Ship orientation
- Restart Game (restart with same players)
- Reset from Scratch (restart with new players)

DOM Game Setup:
- Get Player name
  > require SOME name (form validation)
- Create Gameboard
  > unmasked for game setup while player places ships
- Mask Gameboard
  > creates a second copy of the gameboard, but masked
  > both copies should be updated on any change
- Place Ship
*/
function createBaseHtmlGameboard(numRows) {
  // creates the base HTML gameboard to be saved as a variable
  // size is based on numRows provided (will ALWAYS be a square board)
  // variable size does NOT currently work due to CSS specifications!!

  const baseGameboardContainer = document.createElement('div');
  baseGameboardContainer.classList.add('game-board-container');

  const gameboardLabel = document.createElement('div');
  gameboardLabel.classList.add('game-board-label')
  gameboardLabel.textContent = 'My Board';
  baseGameboardContainer.appendChild(gameboardLabel);

  const rowHeaderDiv = document.createElement('div');
  rowHeaderDiv.classList.add('game-board-row-header');

  const colHeaderDiv = document.createElement('div');
  colHeaderDiv.classList.add('game-board-col-header');

  const gameBoardBlockDiv = document.createElement('div');
  gameBoardBlockDiv.classList.add('game-board-block');

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
      const newGameBoardBlockDiv = gameBoardBlockDiv.cloneNode();
      newGameBoardBlockDiv['id'] = i.toString() + '-' + j.toString();
      baseGameboardGrid.appendChild(newGameBoardBlockDiv);
    }
  }
  
  baseGameboardContainer.appendChild(baseGameboardGrid);

  return baseGameboardContainer;
}

export { createBaseHtmlGameboard };
