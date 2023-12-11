function createShip(length) {
  let hitCount = 0;

  function hit() {
    hitCount += 1;
  }

  function isSunk() {
    if (hitCount === length) {
      return true;
    }
    return false;
  }

  return { hit, isSunk };
}

export { createShip };
