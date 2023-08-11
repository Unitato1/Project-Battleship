import Ship from "./battleship";

function Player(name, computer = false) {
  let ships = [];
  function addShip(Ship) {
    ships.push(Ship);
  }
  function getShips() {
    return ships;
  }
  function makeMove() {}
  return {
    addShip,
    name,
    computer,
    getShips,
  };
}
export default Player;
