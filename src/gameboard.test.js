import * as Gameboard from './gameboard';
import * as Ship from './ship';

it('Test createGameboard & horizontal placeShip', () => {
  const myShip = Ship.createShip(3);
  let myBoard = Gameboard.createGameboard();
  myBoard.placeShip(myShip, 'horizontal', 1, 1);

  expect(myBoard.gameboard[1][1].ship).toBe(myShip);
  expect(myBoard.gameboard[1][2].ship).toBe(myShip);
  expect(myBoard.gameboard[1][3].ship).toBe(myShip);
});

it('Test createGameboard & vertical placeShip', () => {
  const myShip = Ship.createShip(3);
  let myBoard = Gameboard.createGameboard();
  myBoard.placeShip(myShip, 'vertical', 1, 1);

  expect(myBoard.gameboard[1][1].ship).toBe(myShip);
  expect(myBoard.gameboard[2][1].ship).toBe(myShip);
  expect(myBoard.gameboard[3][1].ship).toBe(myShip);
});

it('Test two ships', () => {
  const myShip1 = Ship.createShip(2);
  const myShip2 = Ship.createShip(3);
  let myBoard = Gameboard.createGameboard();
  myBoard.placeShip(myShip1, 'horizontal', 1, 1);
  myBoard.placeShip(myShip2, 'vertical', 2, 1);

  // make sure what is in ship 1's location is not ship 2
  expect(myBoard.gameboard[1][1].ship).not.toBe(myShip2);
  expect(myBoard.gameboard[1][2].ship).not.toBe(myShip2);
});

it('Test overlap placeShip', () => {
  const myShip1 = Ship.createShip(3);
  const myShip2 = Ship.createShip(4);
  let myBoard = Gameboard.createGameboard();
  myBoard.placeShip(myShip1, 'horizontal', 1, 0);
  try {
    myBoard.placeShip(myShip2, 'vertical', 0, 1);
  } catch (e) {
    expect(e.message).toBe('ship overlap');
  }
});

it('Test out of bound placeShip', () => {
  const myShip = Ship.createShip(3);
  let myBoard = Gameboard.createGameboard();
  try {
    myBoard.placeShip(myShip, 'horizontal', 1, 6);
  } catch (e) {
    expect(e.message).toBe('ship out of bounds');
  }
});

it('Test receiveAttack', () => {
  const myShip = Ship.createShip(2);
  let myBoard = Gameboard.createGameboard();
  myBoard.placeShip(myShip, 'horizontal', 1, 1);
  myBoard.receiveAttack(1, 1);

  expect(myBoard.gameboard[1][1].attacked).toBe(true);
  expect(myBoard.gameboard[1][1].ship.getHitCount()).toBe(1);
  expect(myBoard.gameboard[1][2].ship.getHitCount()).toBe(1);
});

it('Test duplicated location receiveAttack', () => {
  const myShip = Ship.createShip(3);
  let myBoard = Gameboard.createGameboard();
  myBoard.placeShip(myShip, 'horizontal', 1, 1);
  myBoard.receiveAttack(1, 1);
  try {
    myBoard.receiveAttack(1, 1);
    expect(false).toBeTruthy();
  } catch (e) {
    expect(e.message).toBe('cannot attack same location twice');
  }
});