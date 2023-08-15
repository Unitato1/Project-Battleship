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
  let computerBoardDom = creatorDom.createPieces().keepingAllPieces;
  let computerBoard = createBoard();
  let playerBoard = createBoard();
  function computerPlaceShips() {
    for (let size of shipSizesComputer) {
      console.log(size, "a");
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
  function uptadeBoardCP() {
    let conter = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (computerBoard.board[i][j].empty) {
          conter++;
          console.log(conter);
          computerBoardDom[i][j].className = "piece occupied";
        }
      }
    }
  }
  uptadeBoardCP();
  function placingBoat() {
    let x = parseInt(this.dataset.x);
    let y = parseInt(this.dataset.y);
    let lenght = shipSizesPlayer[shipSizesPlayer.length - 1];
    if (shipSizesPlayer.length === 0) {
      gameProgres.textContent = "You can start blasting.";
    } else if (!this.dataset.computer && playerBoard.placeBoat(lenght, x, y)) {
      newPlayer.addShip(playerBoard.board[x][y].empty);
      // lenght = shipSizesPlayer.pop();
      uptadeBoard();
    } else if (this.dataset.computer) {
      gameProgres.textContent = "Wrong Board this one is for computer.";
      return;
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
  function uptadeBoard() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (playerBoard.board[i][j].empty)
          playerBoardDom[i][j].className = "piece occupied";
      }
    }
  }
  // function attacking() {
  //   let x = parseInt(this.dataset.x);
  //   let y = parseInt(this.dataset.y);
  //   if (!board.board[x][y].hit && allShipsPlaced) {
  //     if (board.board[x][y].empty) {
  //       keepingAllPieces[x][y].className = "piece hitboat";
  //       board.board[x][y].hit = true;
  //     } else {
  //       keepingAllPieces[x][y].className = "piece hit";
  //       board.board[x][y].hit = true;
  //     }
  //     board.receiveAttack(x, y);
  //     console.log(board.board, board.getMissed());
  //   }
  // }
  // function placeBoatOnDom() {
  //   let x = parseInt(this.dataset.x);
  //   let y = parseInt(this.dataset.y);
  //   if (shipSizes.length === 0) {
  //     gameProgres.textContent = "You can start blasting.";
  //   } else if (!this.dataset.computer && board.placeBoat(lenght, x, y)) {
  //     player.addShip(board.board[x][y].empty);
  //     lenght = shipSizes.pop();
  //     uptadeBoard();
  //   } else if (computer) {
  //     gameProgres.textContent = "Wrong Board this one is for computer.";
  //   } else {
  //     gameProgres.textContent = "You chose wrong piece. Try again.";
  //   }
  // }
  return { placingBoat };
}

newGame();

export default newGame;
