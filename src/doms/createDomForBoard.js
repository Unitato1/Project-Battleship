import createBoard from "../gameboard";

function createDomForBoard(size, computer = false) {
  let board = createBoard();
  let keepingAllPieces = [];
  const body = document.querySelector("#main");
  const header = document.querySelector("#header");
  const boardDom = document.createElement("div");
  const gameProgres = document.querySelector("#gamecontrol");
  header.appendChild(gameProgres);
  boardDom.className = "board";
  function placingBoat() {
    let x = parseInt(this.dataset.x);
    let y = parseInt(this.dataset.y);
    gameProgres.textContent = "";
    if (!computer && board.placeBoat(3, x, y)) {
      uptadeBoard();
    } else if (computer) {
      gameProgres.textContent = "Wrong Board this one is for computer.";
    } else {
      gameProgres.textContent = "You chose wrong piece. Try again.";
    }
  }
  function uptadeBoard() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board.board[i][j].empty)
          keepingAllPieces[i][j].className = "piece occupied";
      }
    }
  }

  let piece;
  let row;
  for (let i = 0; i < size; i++) {
    row = document.createElement("div");
    row.className = "row";
    keepingAllPieces.push([]);
    for (let j = 0; j < size; j++) {
      piece = document.createElement("div");
      piece.className = "piece";
      piece.dataset.y = j;
      piece.dataset.x = i;
      piece.addEventListener("click", placingBoat);
      keepingAllPieces[i].push(piece);
      row.appendChild(piece);
    }
    boardDom.appendChild(row);
  }
  body.appendChild(boardDom);
}

export default createDomForBoard;
