import Ship from "./battleship";
function Piece(empty = false, hit = false) {
  return { empty, hit };
}
function createBoard(size = 8) {
  let missed = 0;
  let sunkedShips = 0;
  let numberOfShips = 0;
  function Board() {
    let board = [];
    for (let i = 0; i < size; i++) {
      board.push([]);
      for (let j = 0; j < size; j++) {
        board[i].push(Piece());
      }
    }
    return board;
  }
  let board = Board();
  function isBoatThere(lenght, x, y) {
    for (let i = 0; i < lenght; i++) {
      if (!board[x][y + i] || board[x][y + i].empty) return true;
    }
    return false;
  }
  const placeBoat = function (length, x, y) {
    let newShip = Ship(length);
    length = newShip.length;
    if (!isBoatThere(length, x, y)) {
      numberOfShips += 1;
      for (let i = 0; i < length; i++) {
        board[x][y + i].empty = newShip;
      }
      return true;
    }
    return false;
  };
  function receiveAttack(x, y) {
    let piece = board[x][y];
    console.log(piece);
    if (piece) {
      if (!piece.empty === true) {
        missed += 1;
        piece.hit = true;
        piece.empty = true;
      } else if (!piece.hit) {
        piece.empty.hit();
        piece.hit = true;
        console.log(sunkedShips, numberOfShips);
        if (piece.empty.isSunk()) sunkedShips += 1;
      } else {
        return false;
      }
      return true;
    }
    return false;
  }
  function getMissed() {
    return missed;
  }
  function allShipsSunk() {
    return sunkedShips === numberOfShips;
  }
  return { placeBoat, board, receiveAttack, getMissed, allShipsSunk };
}
export default createBoard;
