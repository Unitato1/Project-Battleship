import createBoard from "../gameboard";

function createDomForBoard(size, shipSizes, player, computer = false) {
  let board = createBoard();
  let keepingAllPieces = [];
  const body = document.querySelector("#main");
  const header = document.querySelector("#header");
  const boardDom = document.createElement("div");
  const gameProgres = document.querySelector("#gamecontrol");
  header.appendChild(gameProgres);
  boardDom.className = "board";
  let lenght = shipSizes.pop();
  function placingBoat() {
    let x = parseInt(this.dataset.x);
    let y = parseInt(this.dataset.y);
    gameProgres.textContent = "";
    if (shipSizes.length === 0) {
      gameProgres.textContent = "You can start blasting.";
    } else if (!computer && board.placeBoat(lenght, x, y)) {
      player.addShip(board.board[x][y].empty);
      lenght = shipSizes.pop();
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
  function attacking() {
    let x = parseInt(this.dataset.x);
    let y = parseInt(this.dataset.y);
    console.log(this.dataset.x, this.dataset.y, board.board[x][y].empty);
    if (!board.board[x][y].hit) {
      if (board.board[x][y].empty) {
        board.receiveAttack(x, y);
        keepingAllPieces[x][y].className = "piece hitboat";
        board.board[x][y].hit = true;
      } else {
        keepingAllPieces[x][y].className = "piece hit";
        board.board[x][y].hit = true;
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
      keepingAllPieces[i].push(piece);
      row.appendChild(piece);
      piece.dataset.x = i;
      if (computer) piece.addEventListener("click", attacking);
      else piece.addEventListener("click", placingBoat);
    }
    boardDom.appendChild(row);
  }
  body.appendChild(boardDom);

  return { board, uptadeBoard };
}

export default createDomForBoard;
