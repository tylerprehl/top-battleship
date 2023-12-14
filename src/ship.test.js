import * as Ship from "./ship";

// Test access to ship length
it("Test Ship Length Access", () => {
  const myShip = Ship.createShip(3);
  expect(myShip.length).toBe(3);
});

// Test 2 hits on 3 length ship - should not be sunk
it("Test 2 Hits", () => {
  const myShip = Ship.createShip(3);
  myShip.hit();
  myShip.hit();

  expect(myShip.getHitCount()).toBe(2);
  expect(myShip.isSunk()).toBe(false);
});

// Test 3 hits on 3 length ship - should be sunk
it("Test 3 Hits", () => {
  const myShip = Ship.createShip(3);
  myShip.hit();
  myShip.hit();
  myShip.hit();

  expect(myShip.getHitCount()).toBe(3);
  expect(myShip.isSunk()).toBe(true);
});
