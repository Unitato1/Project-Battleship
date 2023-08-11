import Ship from "./battleship";
function Piece(empty = true, hit = false) {
  return { empty, hit };
}
function createBoard(size = 8) {
  let missed = 0;
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
      if (!board[x][y + i] || !board[x][y + i].empty) return true;
    }
    return false;
  }
  const placeBoat = function (length, x, y) {
    let newShip = Ship(length);
    length = newShip.length;
    if (!isBoatThere(length, x, y)) {
      for (let i = 0; i < length; i++) {
        board[x][y + i].empty = newShip;
      }
      return true;
    }
    return false;
  };
  function receiveAttack(x, y) {
    let piece = board[x][y];
    if (piece) {
      if (piece.empty === true) missed += 1;
      else {
        piece.empty.hit();
        piece.hit = true;
      }
    }
  }
  function getMissed() {
    return missed;
  }
  return { placeBoat, board, receiveAttack, getMissed };
}
export default createBoard;
