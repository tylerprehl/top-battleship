import * as Player from './player';

it('Test Player Creation', () => {
  const myPlayer = Player.createPlayer('Tyler');
  expect(myPlayer.name).toBe('Tyler');
});