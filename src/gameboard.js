function createGameboard() {
  let gameboard = [];
  for (let i = 0; i < 8; i++) {
    gameboard[i] = [];
    for (let j = 0; j < 8; j++) {
      gameboard[i][j] = { ship: '-', attacked: false };
    }
  }
  
  function placeShip(ship, orientation, startRowIndex, startColIndex) {
    const shipLength = ship.length;
    if (orientation === 'horizontal') {
      for (let i=startColIndex; i<startColIndex+shipLength; i++) {
        if (i > 7) {
          throw new Error('ship out of bounds');
        }
        if (gameboard[startRowIndex][i].ship !== '-') {
          throw new Error('ship overlap');
        }
        gameboard[startRowIndex][i] = { ship: ship, attacked: false };
      }
    }
    else if (orientation === 'vertical') {
      for (let i=startRowIndex; i<startRowIndex+shipLength; i++) {
        if (i > 7) {
          throw new Error('ship out of bounds');
        }
        if (gameboard[i][startColIndex].ship !== '-') {
          throw new Error('ship overlap');
        }
        gameboard[i][startColIndex] = { ship: ship, attacked: false };
      }
    }
  }

  function receiveAttack(rowIndex, colIndex) {
    if (gameboard[rowIndex][colIndex].attacked === true){
      throw new Error('cannot attack same location twice');
    }
    gameboard[rowIndex][colIndex].attacked = true;
    gameboard[rowIndex][colIndex].ship.hit();
  }
  
  return { gameboard, placeShip, receiveAttack };
}

export { createGameboard };
