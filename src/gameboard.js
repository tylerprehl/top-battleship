function createGameboard() {
  let gameboard = [];
  for (let i = 0; i < 8; i++) {
    gameboard[i] = [];
    for (let j = 0; j < 8; j++) {
      gameboard[i][j] = { ship: '-', attacked: false };
    }
  }

  let ships = [];

  function resetBoard() {
    let newGameboard = [];
    for (let i = 0; i < 8; i++) {
      newGameboard[i] = [];
      for (let j = 0; j < 8; j++) {
        newGameboard[i][j] = { ship: '-', attacked: false };
      }
    }
    
    gameboard = newGameboard;
    ships = [];
  }
  
  function placeShip(ship, orientation, startRowIndex, startColIndex) {
    const shipLength = ship.length;
    if (orientation === 'horizontal') {
      // first check for errors
      for (let i=startColIndex; i<startColIndex+shipLength; i++) {
        if (i > 7) {
          throw new Error('ship out of bounds');
        }
        if (gameboard[startRowIndex][i].ship !== '-') {
          throw new Error('ship overlap');
        }
      }

      // no errors, go ahead and add
      for (let i=startColIndex; i<startColIndex+shipLength; i++) {
        gameboard[startRowIndex][i] = { ship: ship, attacked: false };
      }

      ships.push(ship);
    }
    else if (orientation === 'vertical') {
      // first check for errors
      for (let i=startRowIndex; i<startRowIndex+shipLength; i++) {
        if (i > 7) {
          throw new Error('ship out of bounds');
        }
        if (gameboard[i][startColIndex].ship !== '-') {
          throw new Error('ship overlap');
        }
      }

      // no errors, go ahead and add
      for (let i=startRowIndex; i<startRowIndex+shipLength; i++) {
        gameboard[i][startColIndex] = { ship: ship, attacked: false };
      }

      ships.push(ship);
    }
  }

  function receiveAttack(rowIndex, colIndex) {
    // return true if the attack strikes a ship
    // return false if the attack is a miss
    if (gameboard[rowIndex][colIndex].attacked === true){
      throw new Error('cannot attack same location twice');
    }
    gameboard[rowIndex][colIndex].attacked = true;
    if (gameboard[rowIndex][colIndex].ship !== '-') {
      gameboard[rowIndex][colIndex].ship.hit();
      return true;
    }
    else {
      return false;
    }
  }

  function allShipsAreSunk() {
    for (let i = 0; i < ships.length; i++ ) {
      const ship = ships[i];
      if (ship.isSunk() === false) {
        return false;
      }
    }
    return true;
  }
  
  // access to gameboard is only really necessary for testing purposes
  // (some tests check specific coordinates, which requires access to the 
  // gameboard array itself)
  return { gameboard, resetBoard, placeShip, receiveAttack, allShipsAreSunk };
}

export { createGameboard };
