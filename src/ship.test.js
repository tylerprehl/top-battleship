import * as Ship from './ship';

it('Test 2 Hits', () => {
  const myShip = Ship.createShip(3);
  myShip.hit();
  myShip.hit();

  expect(myShip.isSunk()).toBe(false);
})

it('Test 3 Hits', () => {
  const myShip = Ship.createShip(3);
  myShip.hit();
  myShip.hit();
  myShip.hit();

  expect(myShip.isSunk()).toBe(true);
})
