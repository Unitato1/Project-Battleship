import Player from "../player";

test("Player name", () => {
  let newPlayer = Player("Bob");
  expect(newPlayer.name).toBe("Bob");
});

test("Player computer", () => {
  let newPlayer = Player("Bob", true);
  expect(newPlayer.computer).toBe(true);
});
