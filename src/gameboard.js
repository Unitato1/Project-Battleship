function createBoard(size = 8) {
  function Board() {
    let board = [];
    for (let i = 0; i < size; i++) {
      board.push([]);
      for (let j = 0; j < size; j++) {
        board[i].push(true);
      }
    }
    return board;
  }
  let board = Board();
  function isBoatThere(lenght, x, y) {
    for (let i = 0; i < lenght; i++) {
      if (!board[x][y + i]) return true;
    }
    return false;
  }
  const placeBoat = function (lenght, x, y) {
    if (!isBoatThere(lenght, x, y)) {
      for (let i = 0; i < lenght; i++) {
        board[x][y + i] = false;
      }
      return true;
    }
    return false;
  };
  return { placeBoat, board };
}
export default createBoard;
