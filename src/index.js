import createBoard from "./gameboard";
import Player from "./player";
import createDomForBoard from "./doms/createDomForBoard";

function newGame(size = 8) {
  let turn = true;
  let shipSizes = [4, 4, 3, 3, 3, 2, 2, 1];
  let newPlayer = Player("bob");
  let computer = Player("bob", true);
  createDomForBoard(size);
  createDomForBoard(size, true);
}

newGame();
