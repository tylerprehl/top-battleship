import * as Player from './player';
import * as Gameboard from './gameboard';

it('Test playerName', () => {
  const myPlayer = Player.createPlayer('Tyler');
  expect(myPlayer.playerName).toBe('Tyler');
});

it('Test playerBoard', () => {
  const myPlayer = Player.createPlayer('Tyler', Gameboard.createGameboard());
  expect(myPlayer.playerBoard.gameboard[0][0].ship).toBe('-');
});

it('Test increase/get WinCount', () => {
  const myPlayer = Player.createPlayer('Tyler', Gameboard.createGameboard());
  myPlayer.increaseWinCount();
  expect(myPlayer.getWinCount()).toBe(1);
});
