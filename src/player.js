function createPlayer(playerName, playerBoard) { 
  let winCount = 0;

  function getWinCount() {
    return winCount;
  }

  function increaseWinCount() {
    winCount++;
  }

  return { playerName, playerBoard, getWinCount, increaseWinCount };
}

export { createPlayer };
