import Ship from "./battleship";

function Player(name, computer = false) {
  let ships = [];
  function addShip(Ship) {
    ships.push(Ship());
  }
  function makeMove() {}
  return {
    addShip,
    name,
    computer,
  };
}
export default Player;
