import createBoard from "./gameboard";
import Player from "./player";
import createDomForBoard from "./doms/createDomForBoard";

function newGame(size = 8) {
  let newPlayer = Player("bob");
  let computer = Player("bob", true);
  createDomForBoard(size);
  createDomForBoard(size);
}

newGame();
