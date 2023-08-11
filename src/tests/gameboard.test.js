import createBoard from "../gameboard";
import Ship from "../battleship";
test("place board inside board", () => {
  let board = createBoard();
  board.placeBoat(3, 2, 3);
  expect(board.board[2][3].empty.length).toBe(3);
  expect(board.board[2][4].empty.length).toBe(3);
  expect(board.board[2][5].empty.length).toBe(3);
});
test("place boat outside board", () => {
  let board = createBoard();
  board.placeBoat(3, 2, 6);
  expect(board.board[2][6].empty).toBe(true);
  expect(board.board[2][7].empty).toBe(true);
});
test("createBoard created board", () => {
  let board = createBoard();
  board.placeBoat(3, 6, 4);
  expect(board.board[6][4].empty.length).toBe(3);
  expect(board.board[6][5].empty.length).toBe(3);
  expect(board.board[6][6].empty.length).toBe(3);
});
test("createBoard placeboat 4length", () => {
  let board = createBoard();
  board.placeBoat(4, 6, 4);
  expect(board.board[6][4].empty.length).toBe(4);
  expect(board.board[6][5].empty.length).toBe(4);
  expect(board.board[6][6].empty.length).toBe(4);
  expect(board.board[6][7].empty.length).toBe(4);
});
test("createBoard placeboat 5 length", () => {
  let board = createBoard();
  board.placeBoat(5, 6, 4);
  expect(board.board[6][4].empty.length).toBe(4);
  expect(board.board[6][5].empty.length).toBe(4);
  expect(board.board[6][6].empty.length).toBe(4);
  expect(board.board[6][7].empty.length).toBe(4);
  expect(board.board[6][8]).toBe(undefined);
});
test("createBoard placeboat 10 length", () => {
  let board = createBoard();
  board.placeBoat(10, 6, 4);
  expect(board.board[6][4].empty.length).toBe(4);
  expect(board.board[6][5].empty.length).toBe(4);
  expect(board.board[6][6].empty.length).toBe(4);
  expect(board.board[6][7].empty.length).toBe(4);
});
test("Test for hit ship on board", () => {
  let board = createBoard();
  board.placeBoat(4, 6, 4);
  board.receiveAttack(6, 4);
  board.receiveAttack(2, 4);
  board.receiveAttack(3, 4);
  expect(board.getMissed()).toBe(2);
  board.receiveAttack(6, 5);
  expect(board.board[6][7].empty.isSunk()).toBe(false);
  board.receiveAttack(6, 6);
  board.receiveAttack(6, 7);
  expect(board.board[6][7].empty.isSunk()).toBe(true);
});
