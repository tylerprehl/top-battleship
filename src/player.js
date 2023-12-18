function createPlayer(
  playerName,
  playerBoard,
  playerBoardPersonalView,
  playerBoardMasked,
) {
  let winCount = 0;

  function getWinCount() {
    return winCount;
  }

  function increaseWinCount() {
    winCount++;
  }

  return {
    playerName,
    playerBoard,
    playerBoardPersonalView,
    playerBoardMasked,
    getWinCount,
    increaseWinCount,
  };
}

export { createPlayer };
