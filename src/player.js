function createPlayer(
  playerName,
  playerBoard,
  playerBoardPersonalViewHtml,
  playerBoardMaskedHtml
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
    playerBoardPersonalViewHtml,
    playerBoardMaskedHtml,
    getWinCount,
    increaseWinCount,
  };
}

export { createPlayer };
