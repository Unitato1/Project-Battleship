import createBoard from "../gameboard";
import newGame from "../index";

function createDomForBoard(size, shipSizes, player, computer = false) {
  const body = document.querySelector("#main");
  const header = document.querySelector("#header");
  const gameProgres = document.querySelector("#gamecontrol");
  header.appendChild(gameProgres);

  function createPieces() {
    const boardDom = document.createElement("div");
    boardDom.className = "board";
    let piece;
    let row;
    let keepingAllPieces = [];
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
      }
      boardDom.appendChild(row);
    }
    body.appendChild(boardDom);
    return { keepingAllPieces, gameProgres };
  }

  return { createPieces };
}

export default createDomForBoard;
