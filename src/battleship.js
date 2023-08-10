const MAX_LENGTH = 4;
const MIN_LENGTH = 1;

function Ship(length = 1) {
  if (length > MAX_LENGTH) length = MAX_LENGTH;
  if (length < MIN_LENGTH) length = MIN_LENGTH;
  let lives = length;
  const hit = function () {
    if (lives !== 0) lives -= 1;
  };
  const isSunk = function () {
    return lives === 0;
  };
  return { length, hit, isSunk };
}
export default Ship;
