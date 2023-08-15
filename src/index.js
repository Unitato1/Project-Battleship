import createBoard from "./gameboard";
import Player from "./player";
import createDomForBoard from "./doms/createDomForBoard";

function newGame(size = 8) {
  let turn = true;
  let shipSizesPlayer = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4];
  let shipSizesComputer = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4];

  let newPlayer = Player("bob");
  let computer = Player("bob", true);

  let creatorDom = createDomForBoard(size);
  let playerDom = creatorDom.createPieces();
  let gameProgres = playerDom.gameProgres;
  let playerBoardDom = playerDom.keepingAllPieces;

  let computerDom = creatorDom.createPieces();
  let computerBoardDom = computerDom.keepingAllPieces;

  let computerBoard = createBoard();
  let playerBoard = createBoard();

  function computerPlaceShips() {
    for (let size of shipSizesComputer) {
      let x = Math.floor(Math.random() * 8);
      let y = Math.floor(Math.random() * 8);
      while (!computerBoard.placeBoat(size, x, y)) {
        x = Math.floor(Math.random() * 8);
        y = Math.floor(Math.random() * 8);
      }
      computer.addShip(computerBoard.board[x][y].empty);
    }
  }
  computerPlaceShips();
  // function uptadeBoardCP() {
  //   for (let i = 0; i < size; i++) {
  //     for (let j = 0; j < size; j++) {
  //       if (computerBoard.board[i][j].empty) {
  //         computerBoardDom[i][j].className = "piece occupied";
  //       }
  //     }
  //   }
  // }
  // uptadeBoardCP();
  function placingBoat() {
    let x = parseInt(this.dataset.x);
    let y = parseInt(this.dataset.y);
    let lenght = shipSizesPlayer[shipSizesPlayer.length - 1];
    if (shipSizesPlayer.length === 0) {
      gameProgres.textContent =
        "You can start blasting, no more boats to place.";
    } else if (!this.dataset.computer && playerBoard.placeBoat(lenght, x, y)) {
      newPlayer.addShip(playerBoard.board[x][y].empty);
      uptadeBoard();
    } else {
      gameProgres.textContent = "You chose wrong piece. Try again.";
      return;
    }
    lenght = shipSizesPlayer.pop();
  }
  playerBoardDom.forEach((element) => {
    element.forEach((piece) => {
      piece.addEventListener("click", placingBoat);
    });
  });
  computerBoardDom.forEach((element) => {
    element.forEach((piece) => {
      piece.addEventListener("click", attacking);
    });
  });
  function uptadeBoard() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (playerBoard.board[i][j].empty)
          playerBoardDom[i][j].className = "piece occupied";
      }
    }
  }
  function attacking() {
    let x = parseInt(this.dataset.x);
    let y = parseInt(this.dataset.y);
    if (computerBoard.allShipsSunk() || playerBoard.allShipsSunk()) return;
    if (!computerBoard.board[x][y].hit && !shipSizesPlayer.length) {
      if (computerBoard.board[x][y].empty)
        computerBoardDom[x][y].className = "piece hitboat";
      else {
        computerBoardDom[x][y].className = "piece hit";
      }

      computerBoard.receiveAttack(x, y);
      if (computerBoard.allShipsSunk()) {
        gameProgres.textContent = "You won!!!!";
      } else {
        computerAttack();
      }
    } else gameProgres.textContent = "Place your boats first";
  }
  function computerAttack() {
    let x = Math.floor(Math.random() * 8);
    let y = Math.floor(Math.random() * 8);
    while (playerBoard.board[x][y].hit || !playerBoard.board[x][y]) {
      x = Math.floor(Math.random() * 8);
      y = Math.floor(Math.random() * 8);
    }
    if (playerBoard.board[x][y].empty) {
      playerBoardDom[x][y].className = "piece hitboat";
    } else {
      playerBoardDom[x][y].className = "piece hit";
    }
    playerBoard.receiveAttack(x, y);
    if (playerBoard.allShipsSunk()) {
      gameProgres = "Computer smart, won!!!";
    }
  }

  return { placingBoat };
}

newGame();

export default newGame;
