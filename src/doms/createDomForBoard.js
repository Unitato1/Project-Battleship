function createDomForBoard(size) {
  const body = document.querySelector("#main");
  const board = document.createElement("div");
  board.className = "board";
  let piece;
  let row;
  for (let i = 0; i < size; i++) {
    row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      piece = document.createElement("div");
      piece.className = "piece";
      row.appendChild(piece);
    }
    board.appendChild(row);
  }
  body.appendChild(board);
}
export default createDomForBoard;
