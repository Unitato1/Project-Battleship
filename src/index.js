import createBoard from "./gameboard";
import Player from "./player";
import createDomForBoard from "./doms/createDomForBoard";

function newGame(size = 8) {
  let turn = true;
  let shipSizes = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4];
  let newPlayer = Player("bob");
  let computer = Player("bob", true);
  let newPlayerBoard = createDomForBoard(size, shipSizes, newPlayer);
  let computerBoard = createDomForBoard(size, shipSizes, computer, true);
  for (const size in shipSizes) {
    let x = Math.floor(Math.random() * 8);
    let y = Math.floor(Math.random() * 8);
    while (!computerBoard.board.placeBoat(size, x, y)) {
      x = Math.floor(Math.random() * 8);
      y = Math.floor(Math.random() * 8);
    }
  }
  console.log(computerBoard.board);
}

newGame();
