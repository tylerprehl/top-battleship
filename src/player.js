function createPlayer(
  playerName,
  playerBoard,
  playerBoardPersonalView,
  playerBoardMaskedView,
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
    playerBoardMaskedView,
    getWinCount,
    increaseWinCount,
  };
}

export { createPlayer };
