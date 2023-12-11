import * as Ship from "./ship.js";
import * as Player from "./player.js";

console.log("Testing");

const tylerShip = Ship.createShip(3);
console.log(tylerShip);

const tylerPlayer = Player.createPlayer('Tyler');
console.log(tylerPlayer);
