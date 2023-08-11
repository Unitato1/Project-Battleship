import Ship from "../battleship";
test("Testing lenght", () => {
  expect(Ship().length).toBe(1);
});
test("Testing lenght custom", () => {
  expect(Ship(3).length).toBe(3);
});
test("Testing lenght max", () => {
  expect(Ship(3434).length).toBe(4);
});
test("Testing lenght min", () => {
  expect(Ship(-5000).length).toBe(1);
});
test("Testing hit min", () => {
  let testedShip = Ship(3);
  testedShip.hit();
  expect(testedShip.isSunk()).toBe(false);
});
test("Testing isSunked", () => {
  let testedShip = Ship(3);
  testedShip.hit();
  testedShip.hit();
  testedShip.hit();
  expect(testedShip.isSunk()).toBe(true);
});
test("Testing hits after being sunk", () => {
  let testedShip = Ship(3);
  testedShip.hit();
  testedShip.hit();
  testedShip.hit();
  testedShip.hit();
  testedShip.hit();
  testedShip.hit();
  expect(testedShip.isSunk()).toBe(true);
});
test("Testing 1 live left", () => {
  let testedShip = Ship(3);
  testedShip.hit();
  testedShip.hit();
  expect(testedShip.isSunk()).toBe(false);
});
