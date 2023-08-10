import createBoard from "../gameboard";

test("createBoard created board", () => {
  let board = createBoard();
  board.placeBoat(3, 2, 3);
  expect(board.board[2][3]).toBe(false);
  expect(board.board[2][4]).toBe(false);
  expect(board.board[2][5]).toBe(false);
});
test("createBoard created board", () => {
  let board = createBoard();
  board.placeBoat(3, 2, 6);
  expect(board.board[2][6]).toBe(true);
  expect(board.board[2][7]).toBe(true);
  expect(board.board[2][8]).toBe(undefined);
});
test("createBoard created board", () => {
  let board = createBoard();
  board.placeBoat(3, 2, 3);
  expect(board.board[2][3]).toBe(false);
  expect(board.board[2][4]).toBe(false);
  expect(board.board[2][5]).toBe(false);
});
