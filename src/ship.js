function createShip(length) {
  let hitCount = 0;

  function getHitCount() {
    return hitCount;
  }

  function hit() {
    hitCount += 1;
  }

  function isSunk() {
    if (hitCount === length) {
      return true;
    }
    return false;
  }

  return { length, getHitCount, hit, isSunk };
}

export { createShip };
